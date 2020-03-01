import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import { greet } from 'rust-wasm';
const g = import('rust-wasm');

export default function App() {
  const onPress = async () => {
    await g.then(gg => gg.greet());
  };
  return (
    <View style={styles.container}>
      <Button title="Call wasm" onPress={onPress}><Text>Call wasm</Text></Button>
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
