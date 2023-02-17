import React from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';


export default class ImageSlider extends React.Component {
    state = {
        active: 0
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contenOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide })
        }
    }
    render() {
        return (
            <View style={style.container}>
                <ScrollView
                pagingEnabled
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <Image
                        style={style.image}
                        source={require('../../images/pexels-caleb-kwok-2558460.jpg')}></Image>

                    <Image
                        style={style.image}
                        source={require('../../images/pexels-caleb-kwok-2558460.jpg')}></Image>

                    <Image
                        style={style.image}
                        source={require('../../images/pexels-caleb-kwok-2558460.jpg')}></Image>

                </ScrollView>
                

            </View>
        )
    }
}

const style = StyleSheet.create({
    container: { width:800,height:100 },
    scroll: { width:800,height:100 },
    image: { width:800,height:100,resizeMode: 'contain' },
    pagination: { flexDirection: 'row', position: 'absolute', alignSelf: 'center', bottom: 0 },
    pagingText: { color: '#888', margin: 3 },
    pagingActiveText: { color: '#fff', margin: 3 }
})