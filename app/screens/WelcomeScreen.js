import React from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "http://gabbyhome.com/wp-content/uploads/irene-van-der-poel-8547-768x1156.jpg",
      }}
    >
      //Container
      <View>
        <Image style={styles.logo} source={require("../images/logo-red.png")} />
        <Text>Sell Old Things</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
