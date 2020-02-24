import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './global'

// More info on how to use dappkit
// https://docs.celo.org/celo-sdk/dappkit/usage

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
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
