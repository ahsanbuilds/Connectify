import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import Colors from "../constants/colors";

export default function PostCard({ post }: any) {
  return (
    <View style={styles.card}>

      <View style={styles.header}>
        <Image
          source={{
           uri: "https://randomuser.me/api/portraits/men/32.jpg",
         }}
  style={styles.avatar}
/>

        <View>
          <Text style={styles.name}>
            {post.username}
          </Text>

          <Text style={styles.time}>
            2 hours ago
          </Text>
        </View>
      </View>

      <Text style={styles.title}>
        {post.title}
      </Text>

      <Text style={styles.body}>
        {post.body}
      </Text>

      <Image
        source={{ uri: post.image }}
        style={styles.postImage}
      />

      <View style={styles.actions}>
        <Text style={styles.action}>
          ❤️ {post.likes}
        </Text>

        <Text style={styles.action}>
          💬 {post.comments}
        </Text>

        <Text style={styles.action}>
          🔄 Share
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 20,
    padding: 15,
    marginBottom: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    marginRight: 10,
  },

  name: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  time: {
    color: Colors.gray,
    fontSize: 12,
  },

  title: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },

  body: {
    color: Colors.gray,
    lineHeight: 22,
    marginBottom: 12,
  },

  postImage: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginBottom: 12,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    color: Colors.white,
    fontWeight: "600",
  },
});