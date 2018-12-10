# Product Scanner

## Remote Debugging

https://facebook.github.io/react-native/docs/debugging

Idea :
- shake your phone
- click allow JS remote debugging
- go to your computer navigator dev tools

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

## Installation

### Get NPM
```bash
sudo apt-get install npm
```

### Get React Native CLI
```bash
sudo npm install -g react-native-cli
```

Make it run for android: 
```bash
react-native run-android
```

Make it run for iOS:
```bash
react-native run-ios
```
