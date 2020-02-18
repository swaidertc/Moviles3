import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style={styles.text}>Hello Cesde.</Text>
      </View>
      <View style={styles.box2}>
      <Text style={styles.text}>Hello Cesde.</Text>
      </View>
      <View style={styles.box3}>
      <Text style={styles.text}>Hello Cesde.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text:
  {
    color: '#000',
    textAlign: 'center'
    
  },
  box1:
  {
    flex: 2.2,
    backgroundColor: '#FFEB3B'
  },
  box2:
  {
    flex: 1.5,
    backgroundColor: '#1976D2'
  },
  box3:
  {
    flex: 1,
    backgroundColor: '#D32F2F'
  }
});
