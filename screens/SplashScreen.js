import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({ navigation }) => {
    // const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fca000' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/Logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: '#ffffff',
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: '#000000',
                }]}>Stay Home, We will get it delivered !</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        {/* <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        > */}
                        <Text style={styles.textSign}><Text style={{ color: "#000000" }}>Get Started</Text></Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#000000"
                            size={20}
                        />
                        {/* </LinearGradient> */}
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fca000'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
        backgroundColor: '#fca000',
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 50,
        flexDirection: 'row'
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});