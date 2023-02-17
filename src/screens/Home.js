import { View, StyleSheet, ScrollView,Image } from 'react-native';
import BottomBar from '../components/BottomBar';
import CameraInfo from '../components/CameraInfo';
import ImageSlider from '../components/ImageSlider';
import Table from '../components/Table';
import Images from '../components/Images';

const Home = () => {
    return (
        <>
            
            <View style={styles.container}>
                <ScrollView>
                    <ImageSlider />
                    <Table />
                    <CameraInfo />
                    <Images />
                </ScrollView>
                <BottomBar />

            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
      },
});

export default Home;
