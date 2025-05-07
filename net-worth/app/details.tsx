import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import {
  PlusJakartaSans_700Bold,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
} from "@expo-google-fonts/plus-jakarta-sans";
import AntDesign from "@expo/vector-icons/AntDesign";
import Badge from "./components/Badge";
import { Link } from "expo-router";

export default function Details() {
  const [loaded] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Link href="/">
          <AntDesign name="leftcircleo" size={24} color="black" />
        </Link>
        <Text style={style.header}>Add New Investment</Text>
      </View>
    </View>
  );
}

export const style = StyleSheet.create({
  header: {
    marginLeft: 16,
    fontSize: 24,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardHeader: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans_500Medium",
  },
  mainContainer: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  container: {
    padding: 16,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    flexWrap: "wrap",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
