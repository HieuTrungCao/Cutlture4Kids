import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import useControls from "r3f-native-orbitcontrols";
import { Text3D } from "@react-three/drei/native";

import Vietnam_Map from "../components/Vietnam_Map.js"
import Marker from "../components/Marker.js";

import CONST from "./Constant.js";

import fontPath from "../font/Roboto Medium_Regular.json";

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
                        <ambientLight intensity={2}/>
                        <Suspense style={styles.map}>
                            <Vietnam_Map
                                scale={1.5} 
                                position={[1, -6, 0]}
                                rotation={[Math.PI/2, 0, 0]} 
                            />
                        </Suspense>
                        {/* One pilar pagoda */}
                        <Suspense 
                            style={styles.marker}
                            onClick={ ()=> {navigation.navigate("Info", {name: CONST.ONE_PILLAR_PAGODA_NAME})}}
                        >
                            <Text3D
                                font={fontPath}
                                scale={0.1}
                                bevelSegments={3}
                                bevelEnabled
                                bevelThickness={0.1}
                                position={[-0.3, 0.8, 0.1]}
                                size={2}
                                height={0}
                                onClick={()=> {navigation.navigate("Info", {name: CONST.ONE_PILLAR_PAGODA_NAME})}}
                            >
                                Chùa một cột
                                <meshBasicMaterial color="black" />
                            </Text3D>
                            <Marker 
                                scale={0.1}
                                position={[-0.3, 0.5, 0.1]}
                                onClick={()=> {navigation.navigate("Info", {name: CONST.ONE_PILLAR_PAGODA_NAME})}}
                            />
                        </Suspense>

                        {/* Ho's citadel */}
                        <Suspense 
                            style={styles.marker}
                            onClick={()=> {navigation.navigate("Info", {name: CONST.HO_CITADEL_NAME})}}
                        >
                            <Text3D
                                font={fontPath}
                                scale={0.1}
                                bevelSegments={3}
                                bevelEnabled
                                bevelThickness={0.1}
                                position={[-1, -0.7, 0.1]}
                                size={2}
                                height={0}
                                onClick={()=> {navigation.navigate("Info", {name: CONST.HO_CITADEL_NAME})}}
                            >
                                Thành nhà Hồ
                                <meshBasicMaterial color="black" />
                            </Text3D>
                            <Marker 
                                scale={0.1}
                                position={[-1, -1, 0.1]}
                                onClick={()=> {navigation.navigate("Info", {name: CONST.HO_CITADEL_NAME})}}
                            />
                        </Suspense>

                        {/* Flagpole */}
                        <Suspense 
                            style={styles.marker}
                            onClick={()=>{navigation.navigate("Info", {name: CONST.FLAGPOLE_NAME})}}
                        >
                            <Text3D
                                font={fontPath}
                                scale={0.1}
                                bevelSegments={3}
                                bevelEnabled
                                bevelThickness={0.1}
                                position={[5.7, -15.2, 0.1]}
                                size={2}
                                height={0}
                                onClick={()=>{navigation.navigate("Info", {name: CONST.FLAGPOLE_NAME})}}
                            >
                                Cột cờ Trường Sa
                                <meshBasicMaterial color="black" />
                            </Text3D>
                            <Marker 
                                scale={0.1}
                                position={[5.7, -15.5, 0.1]}
                                onClick={()=>{navigation.navigate("Info", {name: CONST.FLAGPOLE_NAME})}}
                            />
                        </Suspense>
                        
                        {/* Tay House */}
                        <Suspense 
                            style={styles.marker}
                            onClick={()=>{navigation.navigate("Info", {name: CONST.TAY_HOUSE_NAME})}}
                        >
                            <Text3D
                                font={fontPath}
                                scale={0.1}
                                bevelSegments={3}
                                bevelEnabled
                                bevelThickness={0.1}
                                position={[-2.5, 2.5, 0.1]}
                                size={2}
                                height={0}
                                onClick={()=>{navigation.navigate("Info", {name: CONST.TAY_HOUSE_NAME})}}
                            >
                                Nhà sàn người Tày
                                <meshBasicMaterial color="black" />
                            </Text3D>
                            <Marker 
                                scale={0.1}
                                position={[-2.5, 2.2, 0.1]}
                                onClick={()=>{navigation.navigate("Info", {name: CONST.TAY_HOUSE_NAME})}}
                            />
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
    },
    map:{
        zIndex: 0
    },
    marker:{
        zIndex: 1
    }
});