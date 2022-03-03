import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={{
        uri: "http://gabbyhome.com/wp-content/uploads/irene-van-der-poel-8547-768x1156.jpg",
      }}
    >
      {/* Container */}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo-red.png")} />
        <Text style={styles.tagline}>Sell Old Things</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 80,
  },
  tagline: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avneir",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    marginVertical: 10,
  },
});

export default WelcomeScreen;
