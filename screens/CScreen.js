import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CScreen = () => {
  return (
      <View>
        <Text>CScreen</Text>
        <Button title='Go to HomeScreen' onPress={() => navigation.navigate("HomeScreen")}/>
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
