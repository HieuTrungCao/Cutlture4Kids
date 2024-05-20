import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import * as React from 'react';
import CONST from './Constant';
import { ArViewerView } from 'react-native-ar-viewer';

var path

export default function AR_Page({navigation, route}) {

  	const [showArView, setShowArView] = React.useState(true);

	const loadPath = async () => {
		switch (route.params.name) {
			case CONST.HO_CITADEL_NAME:
				path = "https://github.com/HieuTrungCao/Cutlture4Kids/blob/master/assets/HoCitadel.glb?raw=true";
				break;
			case CONST.FLAGPOLE_NAME:
				path = "https://github.com/HieuTrungCao/Cutlture4Kids/blob/master/assets/Flagpole.glb?raw=true";
				break;
			case CONST.ONE_PILLAR_PAGODA_NAME:
				path = "https://github.com/HieuTrungCao/Cutlture4Kids/blob/master/assets/OnePillarPagoda.glb?raw=true";
				break;
			case CONST.TAY_HOUSE_NAME:
				path = "https://github.com/HieuTrungCao/Cutlture4Kids/blob/master/assets/TayHouse.glb?raw=true";
				break;
			default:
				console.log("Path of model cannot be found!")
				break;
		}
	};

	React.useEffect(() => {
		loadPath();
	});

	const takeSnapshot = () => {
		ref.current?.takeScreenshot().then(async (base64Image) => {
		const date = new Date();
		const filePath = `${
			RNFS.CachesDirectoryPath
		}/arscreenshot-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.jpg`;
		await RNFS.writeFile(filePath, base64Image, 'base64');
		console.log('Screenshot written to ' + filePath);
		});
	};

	const mountUnMount = () => setShowArView(!showArView);

	return (
		<View style={styles.container}>
            <ArViewerView
				style={{flex: 1}}
                model={path}
                disableInstantPlacement
                manageDepth
                allowRotate
                allowScale
                allowTranslate
                onStarted={() => console.log("started")}
                onEnded={() => console.log("ended")}
                onModelPlaced={() => console.log("model displayed")}
                onModelRemoved={() => console.log("model not visible anymore")}
            />
			<View style={styles.footer}>
				<TouchableHighlight onPress={takeSnapshot} style={styles.button}>
				<Text>Take Snapshot</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={mountUnMount} style={styles.button}>
				<Text>{showArView ? 'Unmount' : 'Mount'}</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.button}>
				<Text>Reset</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.button}>
				<Text>Rotate</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
	footer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'nowrap',
		flexDirection: 'row',
		backgroundColor: 'white',
	  },
	  button: {
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: 'white',
		padding: 10,
	}
  });
  