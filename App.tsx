import { BackHandler, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import { useEffect } from 'react';
import * as Location from 'expo-location';

const App = () => {

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          BackHandler.exitApp();
        }
      } catch (err) {
          console.error(err);
      }
    })(); 
  }, [])

  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
