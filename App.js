import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{...styles.container, marginTop: 50, borderColor: 'black', borderWidth: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>view 1</Text></View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>view 2</Text></View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>view 3</Text></View>
      
      <StatusBar style="auto" />
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
