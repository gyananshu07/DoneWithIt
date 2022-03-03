import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <View style={styles.innerContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  innerContainer: {
    flexDirection: "column",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 20,
    color: colors.dark,
  },
  subTitle: {
    fontWeight: "normal",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 16,
    color: colors.light,
  },
});
