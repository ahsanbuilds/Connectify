import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/colors";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>Connectify</Text>
      <Text style={styles.subtitle}>Share your world 🌍</Text>

      <View style={styles.card}>

        <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
        <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

        <CustomButton
          title="Login"
          onPress={() => navigation.replace("Main")}
        />

        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Signup")}
        >
          Create new account
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },

  subtitle: {
    color: Colors.gray,
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 20,
  },

  link: {
    marginTop: 10,
    color: Colors.secondary,
    textAlign: "center",
  },
});