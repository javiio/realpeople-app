import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

// Get machine host in order to be able to log from physical devices
const scriptURL = NativeModules.SourceCode.scriptURL;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

const reactotron = Reactotron.configure({ host: scriptHostname }).useReactNative().connect();

// Hack console for easy log using Reactotron
console.xlog = (data, title = 'LOG') => {
  if (__DEV__ && typeof data !== 'undefined' && typeof document === 'undefined') {
    Reactotron.display({
      name: title,
      value: data,
      preview: JSON.stringify(data).substr(0, 50),
    });
  }
};

export default reactotron;
