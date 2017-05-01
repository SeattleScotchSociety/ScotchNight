using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.KeyVault;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using SeattleScotchSociety.ScotchNight.Api.Extensions;
using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            AddAzureKeyVaultAsConfigurationSource(builder);
        }

        public IConfigurationRoot Configuration { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }

        private void AddAzureKeyVaultAsConfigurationSource(IConfigurationBuilder builder)
        {
            var keyVaultClient = new KeyVaultClient(new KeyVaultClient.AuthenticationCallback(GetAccessToken));

            builder.AddAzureKeyVault(
                Configuration["KeyVault:Name"],
                keyVaultClient,
                new DefaultKeyVaultSecretManager());

            Configuration = builder.Build();
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
