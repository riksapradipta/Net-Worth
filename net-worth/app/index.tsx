import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import { useFonts } from "expo-font";
import {
  PlusJakartaSans_700Bold,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
} from "@expo-google-fonts/plus-jakarta-sans";
import { Link } from "expo-router";
import Badge from "./components/Badge";
import Button from "./components/Button";

export default function Index() {
  const [loaded] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Net Worth</Text>
      </View>
      <View style={style.headerContainer}>
        <Text>Recent Transactions</Text>
        <Link href="/details">
          <Button type="secondary" text="Add New Investment" />
        </Link>
      </View>

      <Card title="Bibit" description="Rp 25.000.000"></Card>
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
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
