import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const CameraInfo = (props) => {

    return (
        <>
            <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
            <View style={styles.outerrect}>
                <View style={styles.innerrect1}>
                <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={require('C:\Users\HP\firtproject\images\download.png')}></Image>
                <Image
                style={styles.image}
                source={require('C:\Users\HP\firtproject\images\analyse.png')}></Image>
                <Image
                style={styles.image}
                source={require('C:\Users\HP\firtproject\images\monitor.png')}></Image>
                </View>
                
                </View>
                <View style={styles.innerrect2}>
                    <Text style={styles.btnText}>Take a picture</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'center'
    },
    outerrect: {
        backgroundColor: '#DB9039',
        width: 333,
        height: 170,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 235,
        marginLeft: 15
    },
    innerrect1: {
        backgroundColor: '#F5F5F5',
        width: 312,
        height: 70,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 30,

    },
    innerrect2: {
        backgroundColor: '#F5F5F5',
        width: 312,
        height: 35,
        borderRadius: 10,
        fontSize: 13,
        alignItems: 'center',
        marginBottom: 2
    },
    btnText: {
        fontSize:16,
        marginTop:'auto',
        marginBottom:'auto'
    },
    imageContainer:{
        flexDirection:'row'
    },
    image:
    {
        width:30,
        height:26,
        marginRight:10
    }
  
});

export default CameraInfo;