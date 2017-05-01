Param (
    [Parameter(Mandatory = $false)]
    [String] $CertificateDirectory = "c:\certificates\",

    [Parameter(Mandatory = $false)]
    [String] $CertificateNameWithoutExtension = "SeattleScotchSociety",

    [Parameter(Mandatory = $true)]
    [SecureString] $CertificatePassword
)

$endDate = (Get-Date).AddYears(2) 
$cerPath = [io.path]::Combine($CertificateDirectory, $CertificateNameWithoutExtension + ".cer")
$pfxPath = [io.path]::Combine($CertificateDirectory, $CertificateNameWithoutExtension + ".pfx")

$newCert = New-SelfSignedCertificate -CertStoreLocation Cert:\localMachine\my -DnsName $CertificateNameWithoutExtension -KeyUsage DigitalSignature -KeyAlgorithm RSA -KeyLength 2048 -NotAfter $endDate

$thumprint = $newCert.Thumbprint
Export-Certificate -Cert cert:\localMachine\my\$thumprint -FilePath $cerPath
Export-PfxCertificate -cert cert:\localMachine\my\$thumprint -FilePath $pfxPath -Password $CertificatePassword