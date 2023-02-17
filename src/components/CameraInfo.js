import { View, Text, StyleSheet, Image, Button } from 'react-native';


function image() {

}

const CameraInfo = (props) => {
    var clicked = true;

    return (
        <>
            <Text style={{fontWeight: 'bold',marginLeft:30,marginTop:50}}>New Analysis</Text>
            <View style={styles.line} />
            <View style={styles.outerrect}>
                <View style={styles.innerrect1}>
                    <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-around' }}>
                        <Text >Capture</Text>
                        <Text>Analyse</Text>
                        <Text>Monitor</Text></View>
                    <View style={styles.imageContainer}>

                        <Image

                            style={styles.image}
                            source={require('../../images/download-removebg-preview.png')}></Image>

                        <Image
                            style={styles.image}
                            source={require('../../images/analyse-removebg-preview.png')}></Image>

                        <Image
                            style={styles.image}
                            source={require('../../images/monitor-removebg-preview.png')}></Image>
                    </View>

                </View>
                <View >
                    <Button style={styles.btnimage}  onClick={image()} title="Take a Picture" >
                        {clicked ? "Clicked!" : "Click me"}
                    </Button>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'center'
    },
    line: {
        width:320,
        marginLeft:30,
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    },
    outerrect: {
        backgroundColor: '#DB9039',
        width: 333,
        height: 170,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom:80,
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
   
    btnimage: {

        backgroundColor: '#F5F5F5',
        width: 312,
        height: 35,
        borderRadius: 10,
        fontSize: 13,
        alignItems: 'center',
        marginBottom: 5,

    },

    btnText: {
        fontSize: 16,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    imageContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent:'space-around',
        alignContent:'center'
       
        
    },
    image:
    {
        width: 35,
        height: 30,
       
    }

});

export default CameraInfo;
