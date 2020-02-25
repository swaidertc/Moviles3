import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      </View>
      <View style={styles.box2}>
      <View style={styles.box4}></View>
      <View style={styles.box3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' 
  },
  box1:
  {
    flex: 1,
    backgroundColor: '#FFEB3B',
    flexDirection:"row"
  },
  box2:
  {
    flex: 1,
    backgroundColor: '#1976D2',
    flexDirection:"row"
  },
  box3:
  {
    flex: 1,
    backgroundColor: '#D32F2F'
  },
  box4:
  {
    flex: 1,
    backgroundColor: '#fff'
  }
});
