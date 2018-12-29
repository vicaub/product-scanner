# Product Scanner

## Installation

### Get NPM

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

You need to register an Apple developer account.
Download XCode as well.

Make it run for iOS:
```bash
react-native run-ios
```

## Remote Debugging

https://facebook.github.io/react-native/docs/debugging

Idea :
- shake your phone
- click allow JS remote debugging
- go to your computer navigator dev tools