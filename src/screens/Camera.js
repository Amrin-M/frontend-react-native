import React from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../components/BottomBar';

const Camera = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Camera Screen!</Text>
      <BottomBar />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
};

export default Camera;
