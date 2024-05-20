import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import db from "../quizDB/allDB";
import { useState } from "react";
import React from "react";



export default function Quiz(sitesName) {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    let data;

    checkSite = (param) => {
        switch(param) {
            case 'OnePillarPagoda':
                data = db.chua1cot;
            case 'Ho Citadel':
                data = db.thanhnhaho;
            case 'Flagpole':
                data = db.cotcotruongsa;
            case 'Tay House':
                data = db.nhasannguoitay;
        }
    }

    //data = db.thanhnhaho;

    const checkAns = (answer) => {
        const correctAns = data[currentQuestion].correct;
        const next = currentQuestion + 1;
        if (answer === correctAns && next < data.length) {            
            setCurrentQuestion(next);
        } else {
            alert("Thử lại đi")
        }
    };

    return (
        <Modal>
            <View style={styles.container}>
                <View style={styles.questionContainter}>
                    <Text> {data[currentQuestion].question}</Text>
                    <View styles={styles.answerContainter}>
                        {data[currentQuestion].answers.map((item) => {
                            return <View style={styles.answerItem}>
                                <TouchableOpacity onPress={() => checkAns(item)}>
                                    <Text> {item} </Text>
                                </TouchableOpacity>
                            </View> 
                            
                        })}
                    </View>
                </View>
            </View>
        </Modal>
    );
}



const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }, 
    questionContainter: {
        padding: 10,
        margin: 10,
        borderRadius: 5,    
    },
    answerContainter: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    answerItem: {
        width: '50%',
        height: 50
    }
})