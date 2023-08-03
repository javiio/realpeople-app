import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppStack from './app/navigation/AppStack';
import AppProviders from './app/hooks/AppProviders';
import './app/config/reactotron';

export default function App() {
  const [fontLoaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppProviders>
        <AppStack />
      </AppProviders>
    </NavigationContainer>
  );
}
