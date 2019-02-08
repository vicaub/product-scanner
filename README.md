# Product Scanner : NutriThink

<p align="center"><img src="./assets/images/logo.png" alt="Home Screen" width="50"/></p>

> Scan products in the supermarket and get to truly know your basket

## Installation

### Get NPM

Follow the NodeJS install tutorial (npm is included) or :
```bash
sudo apt-get install npm
```

### Get React Native CLI
```bash
sudo npm install -g react-native-cli
```

### Other

You need NodeJS and Java installed on your computer.

## Update dependencies

if you need to reset your ios and android projects, please run

```
rm -rf android/ ios/
react-native upgrade
```
(reply `no` to all the questions)

then you can update your android and ios folders with the following commands

```
npm install
react-native link
```

## Run the application

Connect your device to your computer.

### Android

You will need Android Studio (for Android SDK).
You then need to enable USB Debugging on your Android device.

Make it run for android: 
```bash
react-native run-android
```

#### Errors you may encounter

- Error when upgrading; "`process.stdin.setRawMode is not a function`" : this error seems to occur when trying to `react-native upgrade` in a MINGW64 terminal. Use a different terminal instead.

- If you have the error "`java 11.0 not found`" you need to use gradle 5.0 instead of 4.4, juste change it in `android/gradle/wrapper/gradle-wrapper.properties`

- "`SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.`" : add a `local.properties` file in the `android/` folder with "`sdk.dir=path/to/android/sdk`"

- "`Failed to install the following Android SDK packages as some licences have not been accepted.`" : install the missing components using the Android Studio SDK Manager (Android SDK Build-Tools 27.0.3).

- "`Cannot add task 'wrapper' as a task with that name already exists.`" : rename the task 'wrapper' to 'wrapper2' for example at the end of `build.gradle`


### iOS

[React Native - Running On Device](https://facebook.github.io/react-native/docs/running-on-device.html)

You need to register an Apple developer account.
Download XCode as well and open the `product-scanner/ios/ProductScanner.xcodeproj` project.

For the 1st time: [configure code signing](https://facebook.github.io/react-native/docs/running-on-device.html#2-configure-code-signing).

If everything is set up correctly, your device will be listed as the build target in the Xcode toolbar, and it will also appear in the Devices panel. You can now press the Build and run button (⌘R) or select Run from the Product menu. The app will launch on your device shortly.

(Make it run for iOS:)
```bash
react-native run-ios
```

Additional things you need to do:

- Add in `product-scanner/ios/ProductScanner/Info.plist`:
  ```
  <key>NSCameraUsageDescription</key>
  <string>We need access to your device camera in order to allow you to scan products.</string>
  ```
  
- Authorize applications from your Apple developer account on your iPhone (Settings/General/Manage profiles and device)


## Run tests

First install jest : `npm install -g jest`

Run tests : `jest`

Jest creates snapshots of the current output and later compares the output to the snapshots it has saved. 

If you want to change the expected output (and the snapshots so that future tests won't fail), run `jest -u`.

## Credits

We are using the [Open Food Fact API](https://world.openfoodfacts.org/).

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</div>