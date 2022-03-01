import { useDimensions } from "@react-native-community/hooks";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
useDimensions;

export default function App() {
  return (
    <View>
      <ImageBackground source={require("./app/assets/background.jpg")}>
        <Image
          style={styles.stretch}
          source={require("./app/assets/logo-red.png")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
});
