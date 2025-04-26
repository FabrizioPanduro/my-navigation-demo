import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BScreen = () => {
  return (
      <View>
        <Text>BScreen</Text>
        <Button title='Go to C' onPress={() => navigation.navigate("C")}/>
      </View>
    );
}

export default BScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
