import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from "react-native";

import CustomButton from "../components/CustomButton";
import api from "../services/api";
import Colors from "../constants/colors";
import AppHeader from "../components/AppHeader";

export default function CreatePostScreen() {
  const [text, setText] = useState("");

  const post = async () => {
    try {
      await api.post("/posts", {
        title: text,
        body: text,
      });

      Alert.alert("Success", "Your post has been published!");

      setText("");
    } catch {
      Alert.alert(
        "Demo Mode",
        "Frontend demonstration only.\nNo backend connected."
      );
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* User Info */}

        <View style={styles.userSection}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/32.jpg",
            }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.name}>Ahsan</Text>

            <TouchableOpacity style={styles.audience}>
              <Text style={styles.audienceText}>🌍 Public</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Caption */}

        <TextInput
          placeholder="What's on your mind?"
          placeholderTextColor="#888"
          multiline
          value={text}
          onChangeText={setText}
          style={styles.input}
        />

        <Text style={styles.counter}>
          {text.length}/250 Characters
        </Text>

        {/* Action Buttons */}

        <View style={styles.row}>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>📷 Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>😊 Feeling</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>📍 Location</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>👥 Tag Friends</Text>
          </TouchableOpacity>

        </View>

        {/* Publish */}

        <CustomButton
          title="Publish Post"
          onPress={post}
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  userSection: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginTop: 12,
    marginBottom: 12,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 12,
  },

  name: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  audience: {
    marginTop: 4,
    backgroundColor: Colors.card,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    alignSelf: "flex-start",
  },

  audienceText: {
    color: "white",
    fontSize: 12,
  },

  input: {
    backgroundColor: Colors.card,
    marginHorizontal: 18,
    borderRadius: 16,
    padding: 16,
    color: "white",
    minHeight: 100,
    fontSize: 15,
    textAlignVertical: "top",
  },

  counter: {
    color: Colors.gray,
    marginHorizontal: 22,
    marginTop: 6,
    marginBottom: 10,
    fontSize: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginBottom: 10,
  },

  option: {
    width: "48%",
    backgroundColor: Colors.card,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  optionText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },

});