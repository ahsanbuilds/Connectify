import React, { useState } from "react";
import { View, TextInput } from "react-native";
import CustomButton from "../components/CustomButton";
import api from "../services/api";
import Colors from "../constants/colors";
import AppHeader from "../components/AppHeader";

export default function CreatePostScreen() {
  const [text, setText] = useState("");

  const post = async () => {
    await api.post("/posts", {
      title: text,
      body: text,
    });

    setText("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>

      <AppHeader />

      <TextInput
        placeholder="What's on your mind?"
        placeholderTextColor="#999"
        value={text}
        onChangeText={setText}
        style={{
          backgroundColor: Colors.card,
          margin: 10,
          padding: 15,
          borderRadius: 12,
          height: 120,
          color: "white",
        }}
        multiline
      />

      <CustomButton title="Publish Post" onPress={post} />

    </View>
  );
}