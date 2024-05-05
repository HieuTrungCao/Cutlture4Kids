import React, {Component} from "react";
import { Text, View, StyleSheet, Dimensions, ImageBackground, Image, Button, Alert} from "react-native";
import LinearGradient from "react-native-linear-gradient";

class Home extends Component{
    render() {
        return(
            <LinearGradient 
				start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
				colors={['#7cb0f8', '#e75fa1', '#f89d81', "#f29b91", "#e561c2", "#fdd78c", "#bdde63"]}
				style={styles.container}>

                <View style={styles.glassContainer}>
                    <View style={styles.navbar}>
                        <View style={styles.logo}>
                            <Text style={styles.name}>Culture4Kids</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.main}>
                            <Text style={styles.heading}>Xin chào chào các bạn! ,{"\n"}Hãy khám phá Việt Nam cùng chúng mình nhé!</Text>
                            <Text style={styles.paragraph}>
                            Ngoài việc kế thừa những giá trị văn hóa tốt đẹp mà cha ông đã để lại, giới trẻ còn mang trong mình sứ mệnh tìm tòi học hỏi, sáng tạo, lan tỏa để vừa gìn giữ, vừa phát triển những giá trị văn hóa đó &#x2764;.
                            </Text>
                        </View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={require('../image/logo.png')} />
							<Button title="Bắt đầu" onPress={() => { Alert.alert("Oke oke") }} />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
    },
    glassContainer: {
        margin: "8%",
		marginBottom: "8%",
        backgroundColor: "white",
        opacity: 1,
		height: "70%",
		borderRadius: 20,
		backgroundColor: "rgba(0, 0, 0, 0.56)"
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      flex: 1,
	  marginTop: 5,
	  marginLeft: 20,
    },
	name:{
		fontSize:24,
	  	fontWeight: "bold",
		color: "white"
	},
    content: {
		flex: 1,
		flexDirection: "row",
		marginTop: 10,
		marginLeft: 20,
		marginRight: 20,
    },
    main: {
		flex: 1,
		width: "50%",
      	marginBottom: 20,
		marginRight: 20,
    },
    heading: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: "white"

    },
    paragraph: {
		fontSize: 16,
		lineHeight: 24,
		color: "white"
    },
    imageWrapper: {
    	alignItems: 'center',
		width: "30%",
		justifyContent: "center",
		marginBottom: 10
    },
    image :{
        resizeMode: 'cover',
        height: "50%",
        width: "60%",
		marginBottom: 20
    }
  });

export default Home;