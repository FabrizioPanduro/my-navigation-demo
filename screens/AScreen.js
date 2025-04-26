import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AScreen = () => {
  return (
      <View>
        <Text>AScreen</Text>
        <Button title='Go to B' onPress={() => navigation.navigate("B")}/>
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
