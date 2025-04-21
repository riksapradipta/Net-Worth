import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Badge from "./Badge";

type CardProps = {
  title: string;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.updated}>Last Updated 4 min ago</Text>
      </View>
      <View>
        <Badge text="+54%" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.12)", // Green with 20% opacity
    borderRadius: 8,
    padding: 16,
    alignSelf: 'stretch',
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)", // Green with 20% opacity
    flexDirection: "row",
  },
  container: {
    gap: 2,
    flexDirection: "column"
  },
  title: {
    opacity: 0.6,
    fontSize: 12,
  },
  description: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom:16,
  },
  updated: {
    fontSize: 10,
    opacity: 0.3,
  }
});

export default Card;
