/*import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
  const [selectedButton, setSelectedButton] = useState('Button 1');
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    setSelectedButton(screenName);
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.bottomBarContainer}>
      <TouchableOpacity 
        style={styles.bottomBarButton}
        onPress={() => handlePress('Home')}
      >
        <Text style={[styles.bottomBarButtonText, selectedButton === 'Button 1' ? styles.selectedButtonText : null]}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.bottomBarButton}
        onPress={() => handlePress('Camera')}
      >
        <Text style={[styles.bottomBarButtonText, selectedButton === 'Button 2' ? styles.selectedButtonText : null]}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.bottomBarButton}
        onPress={() => handlePress('Home')}
      >
        <Text style={[styles.bottomBarButtonText, selectedButton === 'Button 3' ? styles.selectedButtonText : null]}>Button 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  bottomBarContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  bottomBarButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomBarButtonText: {
    fontSize: 16,
    color: '#666',
  },
  selectedButtonText: {
    color: '#000'
  }
};

export default BottomBar;*/


import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const BottomBar = () => {
  const [selectedButton, setSelectedButton] = useState('Screen1');
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    setSelectedButton(screenName);
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.bottomBarContainer}>
      <TouchableOpacity 
        style={styles.bottomBarButton}
        onPress={() => handlePress('Home')}
      >
        <Ionicons
          name={selectedButton === 'Home' ? 'ios-home' : 'ios-home-outline'}
          size={25}
          color={selectedButton === 'Home' ? '#fff' : '#fff'}
        />
       
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.bottomBarButton}
        onPress={() => handlePress('Camera')}
      >
        <Ionicons
          name={selectedButton === 'Camera' ? 'ios-camera' : 'ios-camera-outline'}
          size={35}
          color={selectedButton === 'Camera' ? '#fff' : '#fff'}
        />
      
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.bottomBarButton}
        onPress={() => handlePress('Home')}
      >
        <Ionicons
          name={selectedButton === 'Home' ? 'ios-settings' : 'ios-settings-outline'}
          size={25}
          color={selectedButton === 'Home' ? '#fff' : '#fff'}
        />
       
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  bottomBarContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1F8452',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
    
  },
  bottomBarButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  bottomBarButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  selectedButtonText: {
    color: '#fff'
  }
};

export default BottomBar;


