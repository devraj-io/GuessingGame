import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import ScreenTitle from '../components/ScreenTitle';

export default function GameOverScreen({ onRestart }) {
  return (
    <View style={styles.container}>
      <ScreenTitle>Game Over!</ScreenTitle>
      <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});