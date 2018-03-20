/**
 * Created by devacc2 on 12/03/2018.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Text

} from 'react-native';
const SplashPageComponent = props =>{


    return(
        <ImageBackground style={styles.picture} source={require('../Images/splashScreen.jpg')}>

            <TouchableOpacity style={{ margin: 10 }} onPress={props.goToMain}>
                <Text>Next</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}




export default SplashPageComponent

const styles = StyleSheet.create({

    picture: {

        flex: 1,

        width: null,

        height: null,

        resizeMode: 'cover',

    },

});