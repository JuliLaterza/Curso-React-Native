import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setPickedNumber] = useState();
  const [gameOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber);
    setGameIsOver(false);
  }
  
  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler} />;
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }
  
  return (
    <ImageBackground source={require('./assets/backimage.jpg')} style={styles.rootScreen} resizeMode='cover'>
        { screen }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: 'center',
  },
});
