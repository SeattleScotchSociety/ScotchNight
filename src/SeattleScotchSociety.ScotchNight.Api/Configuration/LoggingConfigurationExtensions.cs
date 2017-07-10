using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage;
using Serilog;
using Serilog.Events;
using Serilog.ExtensionMethods;

namespace SeattleScotchSociety.ScotchNight.Api.Configuration
{
    public static class LoggingConfigurationExtensions
    {
        private static IConfigurationRoot Configuration { get; set; }

        private static string ApplicationName { get; set; }

        private static string ApplicationInsightsInstrumentationKey { get; set; }

        public static ILoggerFactory ConfigureLogging(this ILoggerFactory loggerFactory, string applicationName, string applicationInsightsInstrumentationKey, IConfigurationRoot configuration, IHostingEnvironment environment)
        {
            Configuration = configuration;
            ApplicationName = applicationName;
            ApplicationInsightsInstrumentationKey = applicationInsightsInstrumentationKey;

            ConfigureSerilogLoggers(loggerFactory);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            return loggerFactory.AddDebug();
        }

        private static void ConfigureSerilogLoggers(ILoggerFactory loggerFactory)
        {
            var applicationLogger = CreateLogger(ApplicationName, "Logging:Serilog:Application", IsApplicationSource);
        }

        private static Serilog.Core.Logger CreateLogger(string logName, string configurationSectionPath, Func<LogEvent, bool> filter)
        {
            var configurationSection = Configuration.GetSection(configurationSectionPath);
            var logLevel = Enum.TryParse(configurationSection["MinimumLevel"], out Serilog.Events.LogEventLevel level) ? level : LogEventLevel.Information;

            return new LoggerConfiguration().ReadFrom.ConfigurationSection(configurationSection)
                .Filter.ByIncludingOnly(filter)
                .WriteTo.ApplicationInsightsTraces(ApplicationInsightsInstrumentationKey, logLevel, null, (logEvent, formatProvider) => logEvent.ToDefaultTraceTelemetry(formatProvider, true, false, false))
                .Enrich.FromLogContext()
                .Enrich.WithMachineName()
                .Enrich.WithProperty("Application", ApplicationName)
                .Enrich.WithProperty("EnvironmentAspNetCore", new ScalarValue(Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")))
                .CreateLogger();
        }

        private static bool IsApplicationSource(LogEvent logEvent)
        {
            return logEvent.Properties.TryGetValue("SourceContext", out LogEventPropertyValue sourceContext) && sourceContext.ToString().ToLower().Contains("scotch");
        }
    }
}