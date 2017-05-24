# Setting up your dev box

## scotch-night mobile app

### Prerequisites
1. [Node](https://nodejs.org/en/)
2. [Yarn] (https://yarnpkg.com/lang/en/docs/install/)
3. An editor of your choice
4. Currently we use Expo, so the easiest way to get started dev'ing is installing the [Expo XDE](https://github.com/expo/xde)
5. Follow the [React Native Getting Started docs](https://facebook.github.io/react-native/docs/getting-started.html) for your platform
    * *For the emulator* - The Expo app for your phone/tablet will provide you a QR code to open the app on a device directly, or use the emulators suggested in the getting started docs

### Steps

1. Fork the [repo](https://help.github.com/articles/fork-a-repo/)
2. Run [DevInitialize](../setup/DevInitialize.ps1) from the /setup directory

### Run

1. Start up Expo XDE
2. Open the scotch-night project (Expo is pretty good about automatically finding your projects, so this likely will already be in the list of apps to open)
3. Once the packager starts up (you should see a packager ready message in the log output), do one of the following:
    * Click on the *Share* button and use the Expo app on your device to read the QR code
    * Click on the *Device* button and choose the emulator instance to open your app on

## API Web Service

### Prerequisites

1. [.Net Core (currently 1.1.1)](https://www.microsoft.com/net/download/core)
2. An editor of your choice
3. Install the SeattleScotchSociety certificate to access data stores
    * This will need to be requested from a project maintainer

### Run

1. Run in VS2017 or
2. Navigate to src\SeattleScotchSociety.ScotchNight.Api and execute "dotnet run"

