import React, { Component } from 'react'
import { View, StyleSheet, Image, ImageBackground, Text, Alert } from 'react-native';

class Button extends Component{
    render(){       
        return (
            <View style={styles.container}>
                {/* <ImageBackground source={Image.resolveAssetSource(this.props.path).uri}></ImageBackground> */}
                <Text onPress={() => Alert.alert('Simple Button pressed')}>{this.props.path}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        borderCurve:'circular',
        backgroundColor: "orange",
        borderRadius: 90,
        justifyContent:"center",
        height: 100,
        width: 100
    }
})

export default Button;