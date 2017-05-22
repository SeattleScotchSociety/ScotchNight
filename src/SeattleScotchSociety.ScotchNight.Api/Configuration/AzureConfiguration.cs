using Microsoft.Extensions.DependencyInjection;
using Microsoft.WindowsAzure.Storage;

namespace SeattleScotchSociety.ScotchNight.Api.Configuration
{
    public static class AzureConfiguration
    {
        public static IServiceCollection AddAzureTableStorage(this IServiceCollection services, string azureStorageConnectionString)
        {
            var storageAccount = CloudStorageAccount.Parse(azureStorageConnectionString);

            var tableClient = storageAccount.CreateCloudTableClient();

            services.AddSingleton(tableClient);

            return services;
        }
    }
}
