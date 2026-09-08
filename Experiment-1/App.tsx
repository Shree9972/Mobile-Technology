import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hello React Native! 🎉</Text>
        <Text style={styles.subtitle}>My first app is running.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: '#666666',
  },
});

export default App;
