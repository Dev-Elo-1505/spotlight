const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Convex subpath imports (e.g. convex/react, convex/react-clerk)
// can fail with Metro package exports in some Expo/RN setups.
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
