import React from "react";
import {
  View,
  FlatList,
} from "react-native";

import Colors from "../constants/colors";
import AppHeader from "../components/AppHeader";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <AppHeader />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard post={item} />
        )}
        contentContainerStyle={{
          padding: 12,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}