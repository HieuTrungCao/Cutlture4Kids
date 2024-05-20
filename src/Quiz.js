import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import db from "../quizDB/allDB";
import { useState } from "react";
import React from "react";

export default function Quiz({ navigation, route }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  let data;

  checkSite = (param) => {
    switch (param) {
      case "OnePillarPagoda":
        data = db.chua1cot;
      case "Ho Citadel":
        data = db.thanhnhaho;
      case "Flagpole":
        data = db.cotcotruongsa;
      case "Tay House":
        data = db.nhasannguoitay;
    }
  };

  checkSite(route.params.name);

  data = db.thanhnhaho;

  const checkAns = (answer) => {
    const correctAns = data[currentQuestion].correct;
    const next = currentQuestion + 1;
    if (answer === correctAns && next < data.length) {
      setCurrentQuestion(next);
    } else if (answer === correctAns && next === data.length) {
      Alert.alert(
        "Chúc mừng ※(^o^)/※",
        "Bạn đã trả lời đúng tất cả các câu hỏi"
      );
      navigation.navigate("Info", { name: route.params.name });
    } else {
      Alert.alert("Sai rồi", "Hãy thử lại nào ☜(⌒▽⌒)☞");
    }
  };

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.questionContainter}>
          <Text style={styles.questionStyle}>
            {data[currentQuestion].question}
          </Text>
          <View style={styles.answerContainter}>
            {data[currentQuestion].answers.map((item) => {
              return (
                <View style={styles.answerItem}>
                  <TouchableOpacity onPress={() => checkAns(item)}>
                    <Text style={styles.textStyle}> - {item} </Text>
                  </TouchableOpacity>
                </View>
              );
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
    paddingBottom: 100,
    margin: 20,
    marginBottom: 50,

    borderRadius: 5,
  },
  answerContainter: {
    marginTop: 30,
  },
  answerItem: {
    height: 50,
  },
  textStyle: {
    fontSize: 24,
  },
  questionStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
