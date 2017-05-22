# Set up scotch-night react native app
Set-Location ../src/scotch-night/
yarn 
npm i -g flow-typed
flow-typed install

# Set up ScotchNight API
Set-Location ../SeattleScotchSociety.ScotchNight.Api/
dotnet restore
