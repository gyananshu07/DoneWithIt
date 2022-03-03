import { useDimensions } from "@react-native-community/hooks";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import color from "./app/config/color";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    backgroundColor: color.blue,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "dodgerblue",
    borderRadius: 10,
  },
});
