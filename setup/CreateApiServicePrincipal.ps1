Param (
    [Parameter(Mandatory = $false)]
    [String] $CertificateFilePath = "c:\certificates\SeattleScotchSociety.cer",

    [Parameter(Mandatory = $false)]
    [String] $ResourceGroup = "SeattleScotchSociety",

    [Parameter(Mandatory = $false)]
    [String] $SubscriptionId = "5db4f45f-7aa5-4e95-bf68-0c3a96ac4e67",

    [Parameter(Mandatory = $false)]
    [String] $ApplicationDisplayName = "ScotchNight.Api"
)

Login-AzureRmAccount
Import-Module AzureRM.Resources

if ($SubscriptionId -eq "") {
    $SubscriptionId = (Get-AzureRmContext).Subscription.SubscriptionId
}
else {
    Set-AzureRmContext -SubscriptionId $SubscriptionId
}

if ($ResourceGroup -eq "") {
    $Scope = "/subscriptions/" + $SubscriptionId
}
else {
    $Scope = (Get-AzureRmResourceGroup -Name $ResourceGroup -ErrorAction Stop).ResourceId
}

$Application = Get-AzureRmADApplication -IdentifierUri "http://$ApplicationDisplayName"

if ($Application -eq $null) {
    $cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2
    $cert.Import($CertificateFilePath)
    $certificateValue = [System.Convert]::ToBase64String($cert.GetRawCertData())

    # Create Azure Active Directory application with password
    $Application = New-AzureRmADApplication -DisplayName $ApplicationDisplayName -HomePage ("http://" + $ApplicationDisplayName) -IdentifierUris ("http://" + $ApplicationDisplayName) -CertValue $certificateValue -EndDate $cert.NotAfter -StartDate $cert.NotBefore
}

# Create Service Principal for the AD app
$ServicePrincipal = Get-AzureRMADServicePrincipal -ServicePrincipalName $Application.ApplicationId 

if ($ServicePrincipal -eq $null ) {
    $ServicePrincipal = New-AzureRMADServicePrincipal -ApplicationId $Application.ApplicationId 
    Get-AzureRMADServicePrincipal -ObjectId $ServicePrincipal.Id 
}

$NewRole = $null
$Retries = 0;
While ($NewRole -eq $null -and $Retries -le 6) {
    # Sleep here for a few seconds to allow the service principal application to become active (should only take a couple of seconds normally)
    Sleep 15
    $NewRole = Get-AzureRMRoleAssignment -ServicePrincipalName $Application.ApplicationId -ErrorAction SilentlyContinue

    if ($NewRole -eq $null ) {
        New-AzureRMRoleAssignment -RoleDefinitionName Contributor -ServicePrincipalName $Application.ApplicationId -Scope $Scope | Write-Verbose -ErrorAction SilentlyContinue
    }

    $NewRole = Get-AzureRMRoleAssignment -ServicePrincipalName $Application.ApplicationId -ErrorAction SilentlyContinue
    $Retries++;
}