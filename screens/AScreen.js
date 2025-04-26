import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AScreen</Text>
      <Button></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default AScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
