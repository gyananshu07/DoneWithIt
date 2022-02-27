import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export default function App() {
  let x = 1;
  console.log("Exe");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi!</Text>
      <TouchableWithoutFeedback onPress={() => console.log("Pressed Image")}>
        <Image
          source={{
            width: 300,
            height: 300,
            uri: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
          }}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
