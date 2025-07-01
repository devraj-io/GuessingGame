import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import ScreenTitle from '../components/ScreenTitle';

export default function StartGameScreen({ onStartGame }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  return (
    <View style={styles.container}>
      <ScreenTitle>Start Game</ScreenTitle>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={2}
        value={enteredNumber}
        onChangeText={setEnteredNumber}
        placeholder="Enter a number (1-99)"
      />
      <PrimaryButton onPress={() => onStartGame(Number(enteredNumber))}>
        Start
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#586f99ff',
    borderRadius: 8,
    width: 400,
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});