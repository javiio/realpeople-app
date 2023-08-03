import Reactotron from 'reactotron-react-js';

const reactotron = Reactotron.configure().connect();

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
