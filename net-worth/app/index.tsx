import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Badge from "./components/Badge";

export default function Index() {
  return (
    <View style={style.mainContainer}>
      <Text style={style.header}>Net Worth</Text>
      <View style={style.container}>
        <View style={{ flex: 1, flexDirection: "column", gap: 4 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Button</Text>
          <Text style={{ marginBottom: 12, fontWeight: "200" }}>Button</Text>
          <Badge text="+54%" />

          {/* <Button type="primary" text="Hello World" /> */}
        </View>
        <View
          style={{
            borderColor: "#000",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderWidth: 1,
            gap: 12,
          }}>
          <Text
            style={{
              marginBottom: 12,
              fontWeight: "400",
              borderColor: "#000",
              borderWidth: 1,
              textAlign: "right",
            }}>
            Rp 27.000.000.8000
          </Text>
          <View style={{ alignSelf: "flex-end" }}>
            <Button type="secondary" text="Hello World" />
          </View>
        </View>
      </View>
    </View>
  );
}

export const style = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "500",
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "500",
  },
  mainContainer: {
    margin: 24,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  container: {
    padding: 16,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
