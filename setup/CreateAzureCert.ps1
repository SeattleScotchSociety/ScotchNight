Param (
    [Parameter(Mandatory = $false)]
    [String] $CertificateDirectory = "c:\certificates\",

    [Parameter(Mandatory = $false)]
    [String] $CertificateNameWithoutExtension = "SeattleScotchSociety",

    [Parameter(Mandatory = $true)]
    [SecureString] $CertificatePassword
)

$startDate = Get-Date -Format MM/dd/yyyy
$endDate = (Get-Date).AddYears(2) 
$pvkPath = [io.path]::Combine($CertificateDirectory, $CertificateNameWithoutExtension + ".pvk")
$cerPath = [io.path]::Combine($CertificateDirectory, $CertificateNameWithoutExtension + ".cer")
$pfxPath = [io.path]::Combine($CertificateDirectory, $CertificateNameWithoutExtension + ".pfx")

$newCert = New-SelfSignedCertificate -CertStoreLocation Cert:\localMachine\my -DnsName $CertificateNameWithoutExtension -KeyUsage DigitalSignature -KeyAlgorithm RSA -KeyLength 2048 -NotAfter $endDate

$thumprint = $newCert.Thumbprint
Export-PfxCertificate -cert cert:\localMachine\my\$thumprint -FilePath $pfxPath -Password $CertificatePassword



# ./makecert -sv $pvkPath -n "cn=$CertificateNameWithoutExtension" $cerPath -b $startDate -e $endDate -r
# ./pvk2pfx -pvk $pvkPath -spc $cerPath -pfx $pfxPath -po $CertificatePassword