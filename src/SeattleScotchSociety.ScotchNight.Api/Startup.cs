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
            Environment = environment;

            var builder = new ConfigurationBuilder()
                .SetBasePath(environment.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environment.EnvironmentName}.json", optional: true);

            if (environment.IsDevelopment())
            {
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();

            Configuration = builder.Build();

            AddAzureKeyVaultAsConfigurationSource(builder);
        }

        public IConfigurationRoot Configuration { get; private set; }

        public IHostingEnvironment Environment { get; private set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAzureTableStorage(Configuration["TableStorageConnectionString"]);

            services.AddSingleton<IBottleStore>(provider =>
            {
                var store = new AzureBottleStore(provider.GetService<CloudTableClient>());

                store.InitializeAsync().Wait();

                return store;
            });

            services.AddSingleton<IUserStore>(provider =>
            {
                var store = new AzureUserStore(provider.GetService<CloudTableClient>());

                store.InitializeAsync().Wait();

                return store;
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.ConfigureLogging("Scotch Night", GetApplicationInsightsKey(), Configuration, Environment);

            app.UseMvc();
        }

        private void AddAzureKeyVaultAsConfigurationSource(IConfigurationBuilder builder)
        {
            try
            {
                builder.AddAzureKeyVault(
                    Configuration["KeyVault:Name"],
                    Configuration["AzureAd:ClientId"],
                    Configuration["AzureAd:ClientSecret"]);

                Configuration = builder.Build();
            }
            catch (HttpRequestException)
            {
                Console.WriteLine("There was an Http error adding KeyVault as a configuration source.  This usually means you don't have an internet connection.");
                throw;
            }
        }

        private string GetApplicationInsightsKey()
        {
            var instrumentationKey = Configuration["ApplicationInsights:InstrumentationKey"];
            return instrumentationKey;
        }
    }
}
