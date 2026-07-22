import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>📱 Connectify</Text>
      <Text style={styles.tagline}>Share • Connect • Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
  },
  tagline: {
    fontSize: 12,
    color: Colors.gray,
  },
});