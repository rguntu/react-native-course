const { getDefaultConfig } = require("expo/metro-config"); // if Expo
// OR
//const { getDefaultConfig } = require("metro-config"); // if bare React Native

module.exports = getDefaultConfig(__dirname);
