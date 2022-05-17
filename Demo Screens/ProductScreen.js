import React from "react";
import { View, Text } from "react-native";
import Name from "../Info Components/Name Component/Name";
import { StyleSheet } from "react-native";
import Email from "../Info Components/Email Component/Email";
import Phone from "../Info Components/Phone Component/Phone";
import File from "../Info Components/File Component/File";
import Question from "../Info Components/Question Component/Question";
import Level from "../Info Components/Level Component/Level";
import Response from "../Info Components/Response Component/Response";
import Content from "../Info Components/Content Component/Content";
import Submit from "../Info Components/Submit Button/Submit";
export default function HomeScreen() {
  return (
    <View style={styles.mainPanel}>
      <Name/>
      <Phone/>
      <Email/>
      <Question/>
      <Level/>
      <Response/>
      <Content/>
      <File/>
      <Submit/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",

  },
});
