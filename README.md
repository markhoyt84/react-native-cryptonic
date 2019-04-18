# Cryptonic Market Watch App
This repository houses the Cryptonic hybrid app for iOS/Android. It is built upon [`React Native Framework`](https://facebook.github.io/react-native), which makes build-once-deploy-anywhere super easy.

As with any JavaScript Framework, once you get the hang of how it works and is structured, everything is quite simple.

Each view (or "Page") is separated into it's own folder in the `src/screens` directory along with the styles. Likewise, the views data binding (referred to as `Containers`) are found under `src/containers`. As is such for every other top-level pieces such as the main reducer, interfaces, and reusable components.

## Running Locally in Simulator
To get the app up and running on your simulator/machine locally, follow these instructions:

1. Ensure you have:
    a. Node 10+: `brew install node` NPM will be installed with node\
    b. Watchman: `brew install watchman`\
    c. Expo CLI: `npm install -g expo-cli`\
    d. React Native command line interface: `npm install -g react-native-cli`\
    e. Xcode: Via Mac App Store
2. Clone this repository
3. Run `npm install` in the root directory.
4. For iOS:
    a. Within the root directory run `react-native run-ios` this will launch a simulator with live-reload enabled except on native components
    b. Open ios/ReactNativeCryptonic.xcodeproj in Xcode and run the project like any other
5. For Android
    a. Have an Android emulator running (quickest way to get started), or a device connected.
    b. Within the root directory run `react-native run-android`
