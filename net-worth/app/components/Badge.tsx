import {
  PlusJakartaSans_700Bold,
  PlusJakartaSans_400Regular,
} from "@expo-google-fonts/plus-jakarta-sans";
import { useFonts } from "expo-font";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Badge: React.FC<{ text: string }> = ({ text }) => {
  const [loaded] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_400Regular,
  });

  if (!loaded) {
    return null;
  }
    return (
        <View style={styles.badge}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
    backgroundColor: "#CCFF40", // Green with 20% opacity
        borderRadius: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: "auto",
    },
    text: {
    color: "black",
    fontSize: 12,
    fontFamily: "PlusJakartaSans_700Bold",
    },
});

export default Badge;
