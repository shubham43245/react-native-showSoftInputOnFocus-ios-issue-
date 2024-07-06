import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
     <TextInput style={styles.textInput} placeholder="TextInput default" />
      <TextInput
        style={styles.textInput}
        showSoftInputOnFocus={false}
        placeholder="TextInput with showSoftInputOnFocus={false}" 
      />
    </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textInput: {
    width: 340,
    height: 40,
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
  }
});
