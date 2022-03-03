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
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreens from "./app/screens/ListingDetailsScreens";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
    backgroundColor: "#f8f4f4",
  },
  border: {
    backgroundColor: colors.blue,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "dodgerblue",
    borderRadius: 10,
  },
});
