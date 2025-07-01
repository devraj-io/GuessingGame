import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GuessScreen from './screens/GuessScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  function startGameHandler(number) {
    setUserNumber(number);
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  function restartHandler() {
    setUserNumber(undefined);
    setGameOver(false);
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && !gameOver) {
    screen = <GuessScreen guess={userNumber} onGameOver={gameOverHandler} />;
  } else if (gameOver) {
    screen = <GameOverScreen onRestart={restartHandler} />;
  }

  return <View style={styles.container}>{screen}</View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
});