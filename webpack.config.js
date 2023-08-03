// Fix for running @rneui with react-native-web
// Check https://github.com/akveo/react-native-ui-kitten/issues/996#issuecomment-616115469
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@rneui/base', '@rneui/themed', 'react-native-animatable']
        }
    }, argv);
    return config;
};
