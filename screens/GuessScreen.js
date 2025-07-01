import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import ScreenTitle from '../components/ScreenTitle';

export default function GuessScreen({ userNumber, onGameOver }) {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);
  const [guess, setGuess] = useState(0);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    setGuess(getRandomNumber(minValue, maxValue));
  }, [minValue, maxValue]);

  function handleLower() {
    if (userNumber < guess) {
      setMaxValue(guess);
    } else if (userNumber === guess) {
      onGameOver();
    } else {
      Alert.alert("Don't lie!", "You know that's not true...");
    }
  }

  function handleHigher() {
    if (userNumber > guess) {
      setMinValue(guess + 1);
    } else if (userNumber === guess) {
      onGameOver();
    } else {
      Alert.alert("Don't lie!", "You know that's not true...");
    }
  }

  return (
    <View style={styles.container}>
      <ScreenTitle>Opponent's Guess</ScreenTitle>
      <View style={styles.card}>
        <Text style={styles.label}>Is it your number?</Text>
        <Text style={styles.guessNumber}>{guess}</Text>
        <View style={styles.buttonRow}>
          <PrimaryButton onPress={handleLower}>Lower</PrimaryButton>
          <PrimaryButton onPress={handleHigher}>Higher</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#f8fafc',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    width: 320,
    maxWidth: '90%',
  },
  label: {
    fontSize: 20,
    color: '#4f8cff',
    marginVertical: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  guessNumber: {
    fontSize: 48,
    color: '#22223b',
    fontWeight: 'bold',
    backgroundColor: '#e0e7ff',
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginVertical: 16,
    textAlign: 'center',
    overflow: 'hidden',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 16,
    gap: 12,
  },
});