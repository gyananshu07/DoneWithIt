import { View, StyleSheet, Image } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreens() {
  return (
    <View>
      <Image style={styles.image} source={require("../images/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.price}>Rs.100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../images/Face.png")}
            title="Gyananshu Kashyap"
            subTitle="7 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
  },
  image: {
    height: 300,
    width: "100%",
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
