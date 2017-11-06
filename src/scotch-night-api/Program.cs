using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace SeattleScotchSociety.ScotchNight.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((context, configurationBuilder) =>
                {
                    configurationBuilder.SetBasePath(context.HostingEnvironment.ContentRootPath)
                        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                        .AddJsonFile($"appsettings.{context.HostingEnvironment.EnvironmentName}.json", optional: true);

                    if (context.HostingEnvironment.IsDevelopment())
                    {
                        configurationBuilder.AddUserSecrets<Startup>();
                    }

                    configurationBuilder.AddEnvironmentVariables();

                    var config = configurationBuilder.Build();

                    configurationBuilder.AddAzureKeyVault(
                        config["KeyVault:Name"],
                        config["AzureAd:ClientId"],
                        config["AzureAd:ClientSecret"]);
                })
                .ConfigureLogging((hostingContext, logging) =>
                {
                    logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                    logging.AddAzureWebAppDiagnostics();
                    logging.AddConsole();
                    logging.AddDebug();
                })
                .UseApplicationInsights()
                .UseStartup<Startup>()
                .Build();
    }
}
