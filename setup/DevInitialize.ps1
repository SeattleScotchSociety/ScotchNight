yarn ../src/scotch-night/
npm i -g flow-typed
dotnet restore ../src/SeattleScotchSociety.ScotchNight.Api/SeattleScotchSociety.ScotchNight.Api.csproj

cd ../src/scotch-night/
flow-typed install