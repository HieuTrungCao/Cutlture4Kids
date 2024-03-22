import React, {Component} from "react";
import { Text, View, StyleSheet, Dimensions, ImageBackground, Image} from "react-native";

import Button from "./Button.js";

import Icon from '../assets/icon.jpg';

const ICON_IMAGE = Image.resolveAssetSource(Icon).uri;

class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{uri:ICON_IMAGE}} resizeMode="contain">
                    <View style={styles.view_on_image}>
                        <Button path="../assets/play_icon.png"/>
                    </View>
                </ImageBackground>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 20,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    image: {
        flex:1,
        marginBottom: Dimensions.get('window').height * 0.2,
        justifyContent:"space-between"
    },
    view_on_image:{
        backgroundColor:"red",
        height: 100,
        marginTop: Dimensions.get('window').height * 0.65
    }
  });

export default Home;