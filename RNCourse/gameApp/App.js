import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';



export default function App() {

  const [userNumber, setPickedNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <ImageBackground source={require('./assets/backimage.jpg')} style={styles.rootScreen} resizeMode='cover'>
        <StartGameScreen /> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: 'center',
  },
});
