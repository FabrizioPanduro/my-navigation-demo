import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CScreen</Text>
      <Button></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default CScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
