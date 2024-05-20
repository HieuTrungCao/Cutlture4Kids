import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import useControls from "r3f-native-orbitcontrols";
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import HoCitadel from '../components/HoCitadel'
import Vietnam_Map from '../components/Vietnam_Map';
import CONST from './Constant';

export default function Gameplay(navigation, route) {
    const [OrbitControls, events] = useControls()
    var [pointer, ] = useThree()
    return (
        <View>
            <Canvas>
                <OrbitControls />
                <ambientLight />
                <Suspense>
                    <HoCitadel
                
                        scale={1}
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        onPointerDown = {(e) => onPointerDown(e)}
                        // onPointerMove ={(e) => }
                    />
                </Suspense>
            </Canvas>
        </View>
    )
}

const onPointerDown = (event) => {
    //Get mouse pos
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    //raycast from cam
    raycaster.setFromCamera(mouse, camera);
    //raycast to a plane for movement limitation
    raycaster.ray.intersectPlane(plane, intersects);

    const intersect = raycaster.intersectObjects(scene.children, true);
    //Make ref mesh not interact with the raycaster
    if (intersect.length > 0 && intersect[0].object.parent.name != "Reference")
        selectedObject = intersect[0].object;
    console.log(selectedObject)
    objPos = selectedObject.position
    if (selectedObject.type == "Mesh" && scene.userData.controls.enableRotate == true) scene.userData.controls.enableRotate = false;
    // if (selectedObject.type == "Group" && scene.userData.controls.enableRotate == true) scene.userData.controls.enableRotate = false;
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    background: {
        width: "100%",
        height: "100%"
    },

    model: {
        width: "100%",
        height: "100%"
    },
    map: {
        zIndex: 0
    },
    marker: {
        zIndex: 1
    }
});