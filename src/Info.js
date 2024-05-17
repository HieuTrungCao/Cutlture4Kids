import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Info({navigation, route}) {

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.model}>
                    <Text>{route.params.name}</Text>
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
