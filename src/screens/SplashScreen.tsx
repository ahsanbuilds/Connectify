import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Connectify</Text>
      <Text style={styles.sub}>Social Media App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logo: {
    fontSize: 32,
    color: Colors.white,
    fontWeight: "bold",
  },
  sub: {
    color: Colors.white,
    marginTop: 10,
  },
});