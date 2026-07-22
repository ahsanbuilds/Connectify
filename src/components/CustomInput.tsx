import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function CustomInput(props: any) {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#999"
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    elevation: 2,
  },
});