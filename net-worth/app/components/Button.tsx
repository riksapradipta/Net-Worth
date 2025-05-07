import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type ButtonProps = {
  text: string;
  type: "default" | "primary" | "secondary" | "tertiary";
  icon?: keyof typeof AntDesign.glyphMap;
};
const Button = (props: ButtonProps) => {
  const getButtonStyle = () => {
    switch (props.type) {
      case "primary":
        return styles.button;
      case "secondary":
        return styles.buttonSecondary;
      case "tertiary":
        return styles.buttonTertiary;
      default:
        return styles.button;
    }
  };

  const getTextStyle = () => {
    switch (props.type) {
      case "primary":
        return styles.buttonTextPrimary;
      case "secondary":
        return styles.buttonTextSecondary;
      case "tertiary":
        return styles.buttonTextTertiary;
      default:
        return styles.buttonTextPrimary;
    }
  };

  return (
    <Pressable
      style={getButtonStyle()}
      onPress={() => console.log("Button Pressed")}
    >
      {props.icon ? (
        <AntDesign name={props.icon} size={8} color="black" />
      ) : null}
      <Text style={getTextStyle()}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonSecondary: {
    backgroundColor: "#6200ee",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  button: {
    backgroundColor: "#AAFF00",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    alignSelf: "flex-start", // Optional: Ensures the button aligns to the start of the parent
  },
  buttonTertiary: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderWidth: 1,
    gap: 2,
    flexDirection: "row",
  },
  buttonTextPrimary: {
    color: "#000",
    fontWeight: "300",
    fontSize: 14,
  },
  buttonTextTertiary: {
    color: "#000",
    fontWeight: "400",
    fontSize: 14,
  },

  buttonTextSecondary: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});

export default Button;
