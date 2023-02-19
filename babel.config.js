module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:babel-preset-expo'],
        plugins: ['nativewind/babel', 'module:react-native-dotenv'],
    };
};
