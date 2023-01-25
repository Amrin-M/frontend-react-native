import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BottomBar from '../components/BottomBar';
import CameraInfo from '../components/CameraInfo';

const Home = () => {
    return (
        <View style={styles.container}>
            <CameraInfo />
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default Home;
