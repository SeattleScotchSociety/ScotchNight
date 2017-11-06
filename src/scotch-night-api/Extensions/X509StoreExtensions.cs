using System.Security.Cryptography.X509Certificates;

namespace SeattleScotchSociety.ScotchNight.Api.Extensions
{
    public static class X509StoreExtensions
    {
        public static X509Certificate2 FindCertificateByThumbprint(this X509Store store, string thumbprint)
        {
            store.Open(OpenFlags.ReadOnly);

            X509Certificate2Collection collection = store.Certificates.Find(X509FindType.FindByThumbprint, thumbprint, false);

            if (collection == null || collection.Count == 0)
            {
                return null;
            }

            return collection[0];
        }
    }
}
