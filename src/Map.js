import { Canvas } from "@react-three/fiber/native";
import { Component, Suspense } from "react";
import { Alert, Button, Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useControls from "r3f-native-orbitcontrols";

import Model from "../components/Vietnam_Map.js"

export default function Map({navigation}){
    
    const [OrbitControls, events] = useControls()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.model} {...events}>
                <ImageBackground 
                    style = {styles.background}
                    resizeMode="stretch" 
                    source={require('../image/background.jpeg')}    
                >
                    <Canvas>
                        <OrbitControls enableRotate={false}/>
                        <ambientLight/>
                        <Suspense>
                            <Model rotateX={3}/>
                        </Suspense>
                    </Canvas>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    background:{
        width: "100%",
        height: "100%"
    },

    model: {
        width: "100%",
        height: "100%"
    }
});