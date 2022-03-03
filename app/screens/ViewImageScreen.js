import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import colors from "../config/color";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../images/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
