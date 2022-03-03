import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppText = ({ children, style }) => {
  return <Text style={[styles.childrenStyle, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  childrenStyle: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    fontWeight: "bold",
  },
});
