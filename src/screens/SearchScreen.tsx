import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import Colors from "../constants/colors";
import AppHeader from "../components/AppHeader";
import { posts } from "../data/posts";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const filteredUsers = posts.filter((item) =>
    item.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <AppHeader />

      <TextInput
        placeholder="Search friends..."
        placeholderTextColor="#888"
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.avatar }}
              style={styles.avatar}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.username}</Text>
              <Text style={styles.bio}>{item.bio}</Text>
            </View>

            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  input: {
    backgroundColor: Colors.card,
    margin: 15,
    padding: 15,
    borderRadius: 15,
    color: "white",
    fontSize: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 15,
    borderRadius: 18,
    elevation: 3,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: Colors.primary,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },

  bio: {
    color: Colors.gray,
    marginTop: 3,
    fontSize: 13,
  },

  followBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 12,
  },

  followText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});