import { Suspense } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  ImageBackground,
} from "react-native";

import HO_CITADEL_DATA from "../info/HoCitadel.json";
import FLAGPOLE_DATA from "../info/Flagpole.json";
import ONE_PILLAR_PAGODA_DATA from "../info/OnePillarPagoda.json";
import TAY_HOUSE_DATA from "../info/TayHouse.json";
import CONST from "./Constant";
import { Canvas } from "@react-three/fiber/native";
import useControls from "r3f-native-orbitcontrols";
import Flagpole from "../components/Flagpole";
import HoCitadel from "../components/HoCitadel";
import OnePillarPagoda from "../components/OnePillarPagoda";
import TayHouse from "../components/TayHouse";

var Data;
var name;
var Model;

export default function Info({ navigation, route }) {
  switch (route.params.name) {
    case CONST.HO_CITADEL_NAME:
      Data = HO_CITADEL_DATA;
      name = CONST.HO_CITADEL_NAME_VI;
      Model = (
        <HoCitadel scale={0.3} position={[0, -0.5, 0]} rotation={[0, 0.2, 1]} />
      );
      break;
    case CONST.FLAGPOLE_NAME:
      Data = FLAGPOLE_DATA;
      name = CONST.FLAGPOLE_NAME_VI;
      Model = (
        <Flagpole scale={0.3} position={[0, -0.5, 0]} rotation={[0, 0.2, 1]} />
      );
      break;
    case CONST.ONE_PILLAR_PAGODA_NAME:
      Data = ONE_PILLAR_PAGODA_DATA;
      name = CONST.ONE_PILLAR_PAGODA_NAME_VI;
      Model = (
        <OnePillarPagoda
          scale={1}
          position={[0, -0.5, 0]}
          rotation={[0, 0.2, 1]}
        />
      );
      break;
    case CONST.TAY_HOUSE_NAME:
      Data = TAY_HOUSE_DATA;
      name = CONST.TAY_HOUSE_NAME_VI;
      Model = (
        <TayHouse scale={0.3} position={[0, -0.5, 0]} rotation={[0, 0.2, 1]} />
      );
      break;
    default:
      console.log("Model cannot be found!");
      break;
  }

  const [OrbitControls, events] = useControls();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.show_model} {...events}>
        <ImageBackground
          style={styles.background}
          resizeMode="stretch"
          source={require("../image/background.jpeg")}
        >
          <Canvas>
            <OrbitControls enableRotate={true} />
            <ambientLight intensity={2} position={[0, 0, 0]} />
            <Suspense style={styles.model}>{Model}</Suspense>
          </Canvas>
        </ImageBackground>
      </View>
      <View style={styles.info}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.header_1}>{name}</Text>
          {Data.map((item) => {
            return (
              <View>
                <Text style={styles.header_2}>{item.key}</Text>
                {item.value.map((v) => {
                  return <Text style={styles.paragraph}>{"\t\t" + v}</Text>;
                })}
              </View>
            );
          })}
          <View style={styles.button}>
            <Button
              style={styles.exit_button}
              title="Quay lại"
              onPress={() => {
                navigation.navigate("Map");
              }}
            />
            <Button style={styles.ar_button} 
				title="     AR       " 
				onPress={()=>{navigation.navigate("AR_Page", {name: route.params.name})}}
			/>
            <Button
              style={styles.game_button}
              title="   Chơi    "
              onPress={() => {
                navigation.navigate("Quiz", { name: route.params.name });
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  show_model: {
    flex: 6,
    flexWrap: "wrap",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  model: {
    width: "100%",
    height: "100%",
  },
  info: {
    flex: 4,
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  scroll: {
    width: "95%",
  },
  header_1: {
    width: "100%",
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  header_2: {
    width: "100%",
    marginTop: 5,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    textAlign: "justify",
  },
  button: {
    width: "100%",
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  exit_button: {
    paddingLeft: 10,
    // flexWrap:'wrap'
  },
  ar_button: {
    // flexWrap:'wrap'
  },
  game_button: {
    // flexWrap:'wrap'
  },
});
