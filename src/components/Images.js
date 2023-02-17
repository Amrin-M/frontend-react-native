
import { View, ScrollView, Image, StyleSheet,Text } from 'react-native';


const images = [
    { id: 1, uri: require('../../images/pexels-caleb-kwok-2558460.jpg') },
    { id: 2, uri: require('../../images/pexels-sohail-nachiti-807598.jpg') },
    { id: 3, uri: require('../../images/pexels-photomix-company-1002703.jpg') },
    { id: 4, uri: require('../../images/pexels-caleb-kwok-2558460.jpg') },
    { id: 5, uri: require('../../images/pexels-photomix-company-1002703.jpg') },
];

const Images = () => {
    return (
        <>
            <Text style={{ fontWeight: 'bold', marginLeft: 30, marginBottom:10 }}>Recent Captures</Text>
            <View style={styles.line} />
            <View style={styles.container}>
                <ScrollView horizontal={true}>
                    {images.map((image) => (
                        <Image
                            key={image.id}
                            source={image.uri}
                            style={styles.image}
                        />
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        marginBottom:500
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 5,
        marginLeft:30,
        borderRadius:5
    },
    line: {
        width:320,
        marginLeft:30,
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    },
});
export default Images;
