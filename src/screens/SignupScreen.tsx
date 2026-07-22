import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/colors";

export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields required");
      return;
    }

    Alert.alert("Success", "Account created successfully");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <CustomInput placeholder="Name" value={name} onChangeText={setName} />
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
      <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <CustomButton title="Signup" onPress={handleSignup} />

      <Text
        style={styles.link}
        onPress={() => navigation.goBack()}
      >
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  title: {
    color:"white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    color: Colors.primary,
    textAlign: "center",
  },
});