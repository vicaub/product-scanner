# Product Scanner : NutriThink

<p align="center"><img src="./assets/images/logo.png" alt="Home Screen" width="50"/></p>

> Scan products in the supermarket and get to truly know your basket

<p align="center">
<img src="./Screenshots/Scan.png" alt="Home Screen" width="200"  style="border: 1px solid grey"/>
<img src="./Screenshots/Product.png" alt="Product" width="200" style="border: 1px solid grey"/>
<img src="./Screenshots/Alert.png" alt="Alert" width="200" style="border: 1px solid grey"/>
</p>

<p align="center">
<img src="./Screenshots/Baskets.png" alt="Baskets" width="200" style="border: 1px solid grey"/>
<img src="./Screenshots/Statistics.png" alt="Statistics" width="200" style="border: 1px solid grey"/>
<img src="./Screenshots/Allergies.png" alt="Allergies" width="200" style="border: 1px solid grey"/>
</p>

## Features

- Scan products and get info from the Open Food Facts API
- Retrieve a list of all your scans
- Add a product to today's basket
- Get statistics and charts on your baskets data
- Fill in your allergies and get alerted when you might be allergic to a scanned product

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

**If you need to reset your ios and android projects**, please run :

```bash
rm -rf android/ ios/
react-native upgrade
```

(reply `no` to all the questions)

then you can update your android and ios folders with the following commands

```bash
npm install
react-native link
```

To finalize installation of `react-native-gesture-handler` for Android, be sure to make the necessary modifications to MainActivity.java:

```java
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

## Run the application

### Foreword

> If you want to prefill the basket and product databases with some products, uncomment the corresponding lines in `App.js` before running the app.

> Testing on an Android phone is faster and a little bit easier than testing on an iPhone which requires a MacBook.

Connect your device to your computer. Make sure your laptop and your phone are on the **same** Wi-Fi network.

### Android

Instructions for Android are in the [React Native installation guide](https://developer.android.com/studio/install).

- Select `Building Projects with Native Code` tab, your target OS (Macos, Windows or Linux) and your target OS (Android)
- Follow `Java Development Kit` instructions
- Follow `Android development environment` instructions

After you installed a JDK and an Android development environment, you can read the next paragraphs to run the app in your Android device.

#### Debug version

In the project folder:

```bash
react-native run-android
```

##### Errors you may encounter

- Error when upgrading: "`process.stdin.setRawMode is not a function`": this error seems to occur when trying to `react-native upgrade` in a MINGW64 terminal. Please use a different terminal instead.

- If you have the error "`java 11.0 not found`" you need to use gradle 5.0 instead of 4.4, just change it in `android/gradle/wrapper/gradle-wrapper.properties`

- "`SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.`" : add a `local.properties` file in the `android/` folder with "`sdk.dir=path/to/android/sdk`"

- "`Failed to install the following Android SDK packages as some licences have not been accepted.`" : install the missing components using the Android Studio SDK Manager (Android SDK Build-Tools 27.0.3).

- "`Cannot add task 'wrapper' as a task with that name already exists.`" : rename the task 'wrapper' to 'wrapper2' for example at the end of `build.gradle`.

#### Release version

In order to build a release APK file:

- Create a release key with the following command: `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`, answer to the different questions and move the generated `my-release-key.keystore` file under the `android/app` folder.
- Run `cp android/gradle.properties.template android/gradle.properties` or copy paste the content of `android/gradle.properties.template` in `android/gradle.properties`.
- Replace the `*****` by your release key password in the `android/gradle.properties` file.
- Make sure to remove all `default.realm.*` and `realm-*` folders and files generated by Jest tests.
- Make sure to quit the React Native packager (launched by `react-native run-android`).

Finally you can run the following command to start building the release APK file :

```bash
react-native run-android --variant=release
```

The generated APK file will be located at  `android/app/build/output/apk/release/app-release.apk`.

Don't forget to change version number in `android/app/build.gradle`.

You can then upload this apk to the Google Play Store.

### iOS

In order to test on an iPhone, you need to develop on a MacBook.

#### Debug version

[React Native - Running On Device](https://facebook.github.io/react-native/docs/running-on-device.html)

You need to [register an Apple developer account](https://developer.apple.com/account/#/welcome).
Download XCode as well and open the `product-scanner/ios/NutriThink.xcodeproj` project in XCode.

For the 1st time: [configure code signing](https://facebook.github.io/react-native/docs/running-on-device.html#2-configure-code-signing) for the project.

Then if everything is set up correctly, your device will be listed as the build target in the Xcode toolbar, and it will also appear in the Devices panel. You can now press the Build and run button (⌘R) or select Run from the Product menu. The app will launch on your device shortly.

Additional things you need to do:

- Authorize applications from your Apple developer account on your iPhone (Settings/General/Manage profiles and device)

- If you have updated the `ios/` folder, add in `product-scanner/ios/NutriThink/Info.plist`:

  ```plist
  <key>NSCameraUsageDescription</key>
  <string>We need access to your device camera in order to allow you to scan products.</string>
  ```

#### Release version

[Building the app for production](https://facebook.github.io/react-native/docs/running-on-device.html#building-your-app-for-production)

If the app is not yet set for release, [configure release scheme](https://facebook.github.io/react-native/docs/running-on-device.html#2-configure-release-scheme): go to **Product → Scheme → Edit Scheme**. Select the **Run** tab in the sidebar, then set the Build Configuration dropdown to `Release`.

You can now build the app for release by tapping ⌘B or selecting **Product → Build** from the menu bar. Once built for release, you'll be able to distribute the app to beta testers and submit the app to the App Store.

To run the release version on your phone: just tap ⌘R or select Run from the Product menu.

## Run tests

First install jest: `npm install -g jest`

Run tests: `jest`

Jest creates snapshots of the current output and later compares the output to the snapshots it has saved.

If you want to change the expected output (and the snapshots so that future tests won't fail), run `jest -u`.

## Credits

We are using the [Open Food Facts API](https://world.openfoodfacts.org/).

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</div>

