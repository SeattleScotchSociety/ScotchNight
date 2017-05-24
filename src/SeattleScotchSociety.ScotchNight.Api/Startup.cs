using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.KeyVault;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Configuration;
using SeattleScotchSociety.ScotchNight.Api.Data;
using SeattleScotchSociety.ScotchNight.Api.Extensions;
using System;
using System.IO;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api
{
    public class Startup
    {
        public Startup(IHostingEnvironment environment)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(environment.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environment.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();

            Configuration = builder.Build();

            AddAzureKeyVaultAsConfigurationSource(builder);
        }

        public IConfigurationRoot Configuration { get; private set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAzureTableStorage(Configuration["TableStorageConnectionString"]);

            services.AddSingleton<IBottleStore>(provider =>
            {
                var store = new AzureBottleStore(provider.GetService<CloudTableClient>());

                store.InitializeAsync().Wait();

                return store;
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }

        private void AddAzureKeyVaultAsConfigurationSource(IConfigurationBuilder builder)
        {
            try
            {
                var keyVaultClient = new KeyVaultClient(new KeyVaultClient.AuthenticationCallback(GetAccessToken));

                builder.AddAzureKeyVault(
                    Configuration["KeyVault:Name"],
                    keyVaultClient,
                    new DefaultKeyVaultSecretManager());

                Configuration = builder.Build();
            }
            catch (HttpRequestException)
            {
                Console.WriteLine("There was an Http error adding KeyVault as a configuration source.  This usually means you don't have an internet connection.");
                throw;
            }
        }

        private ClientAssertionCertificate GetCert()
        {
            X509Certificate2 cert;

            using (X509Store store = new X509Store(StoreName.My, StoreLocation.LocalMachine))
            {
                var thumbprint = Configuration["AzureAd:CertThumbprint"];
                Console.WriteLine($"thumbprint: ${thumbprint}");
                store.Open(OpenFlags.ReadOnly);
                cert = store.FindCertificateByThumbprint(thumbprint);
            }

            return new ClientAssertionCertificate(Configuration["AzureAd:ClientId"], cert);
        }

        private async Task<string> GetAccessToken(string authority, string resource, string scope)
        {
            var context = new AuthenticationContext(authority, TokenCache.DefaultShared);
            var result = await context.AcquireTokenAsync(resource, GetCert());
            return result.AccessToken;
        }
    }
}
