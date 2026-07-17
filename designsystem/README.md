# Perifit Design System

This repository contains the Perifit Design System, a project library that contains design tokens and shared common components for both the Perifit Care and Perifit Pump projects. It also includes an example application to demonstrate its usage.

https://www.figma.com/design/awxOdpSe6TuSOOOecbEATT/Perifit--DS-?node-id=8-3&p=f&t=b2MuSflvONtlcfnL-0

## Getting Started

### Requirement

- node: 20.19.1 or greater

To get started with the development environment, you need to install the dependencies for both the library and the example app. Run the following command in the root of the project:

```bash
yarn install
```

## Building the Library

The design system library is located in `packages/library`. To build the library, run the following command from the root of the project:

```bash
yarn library build
```

This will compile the source code from `src` and output the bundled files to the `lib` directory.

⚠️ **IMPORTANT:** Whenever you make changes in `packages/library/src`, run `yarn library build` again and commit **both** the updated source files and the regenerated contents of `packages/library/lib` to the repository.

## Running the Example App

The example app is located in `packages/example`. It's a React Native application that showcases the components from the design system library.

### Running on iOS

1.  Navigate to `example` folder
2.  Install gems:
    ```bash
    bundle install
    ```
3.  Install the dependencies and start metro:
    ```bash
    yarn go
    ```

### Running on Android

1.  Make sure you have an Android emulator running or a device connected.

2.  Run the app on the Android emulator/device:
    ```bash
    yarn example android
    ```

## Installing Icon Fonts

Currently, this library relies on three `react-native-vector-icons` packs for its components: **FontAwesome 6**, **Ionicons**, and **Octicons**.These are declared as peer dependencies, so your host app must install them for icons to render correctly (and complete the iOS font setup below).

```bash
yarn add @react-native-vector-icons/fontawesome6 @react-native-vector-icons/ionicons @react-native-vector-icons/octicons html-entities
```

### Android

No additional setup is necessary.

### iOS

Run the following commands to update the Info.plist and install CocoaPods:

```bash
npx rnvi-update-plist package.json ios/example/Info.plist
cd ios && pod install   # or: cd ios; bundle exec pod install
```

### References

- **FontAwesome 6**: [react-native-vector-icons FontAwesome6](https://oblador.github.io/react-native-vector-icons/#FontAwesome6)
- **Ionicons**: [react-native-vector-icons Ionicons](https://oblador.github.io/react-native-vector-icons/#Ionicons)
- **Octicons**: [react-native-vector-icons Octicons](https://oblador.github.io/react-native-vector-icons/#Octicons)
