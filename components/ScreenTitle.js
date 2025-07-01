import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ScreenTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#22223b',
  },
});