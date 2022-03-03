import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    width: "100%",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avneir",
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
