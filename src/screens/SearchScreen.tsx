import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
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
        placeholderTextColor="#999"
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.username.charAt(0)}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.username}</Text>
              <Text style={styles.bio}>
                Active Connectify User
              </Text>
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
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 15,
    borderRadius: 15,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  bio: {
    color: Colors.gray,
    marginTop: 2,
  },

  followBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },

  followText: {
    color: "white",
    fontWeight: "bold",
  },
});