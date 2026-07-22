import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

import Colors from "../constants/colors";
import AppHeader from "../components/AppHeader";
import { posts } from "../data/posts";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <FlatList
        data={posts}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.profileSection}>
            <Image
               source={{
                 uri: "https://randomuser.me/api/portraits/men/32.jpg",
                }}
               style={styles.avatar}/>

            <Text style={styles.name}>Ahsan</Text>

            <Text style={styles.bio}>
              React Native Developer 🚀
            </Text>

            <View style={styles.stats}>
              <View>
                <Text style={styles.number}>24</Text>
                <Text style={styles.label}>Posts</Text>
              </View>

              <View>
                <Text style={styles.number}>1.2K</Text>
                <Text style={styles.label}>Followers</Text>
              </View>

              <View>
                <Text style={styles.number}>845</Text>
                <Text style={styles.label}>Following</Text>
              </View>
            </View>

            <View style={styles.editBtn}>
              <Text style={styles.editText}>
                Edit Profile
              </Text>
            </View>

            <Text style={styles.galleryTitle}>
              My Posts
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={styles.postImage}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 120,
          paddingHorizontal: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  profileSection: {
    alignItems: "center",
    paddingHorizontal: 15,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  avatarText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },

  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },

  bio: {
    color: Colors.gray,
    marginTop: 5,
    marginBottom: 15,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },

  number: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  label: {
    color: Colors.gray,
    textAlign: "center",
  },

  editBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 20,
  },

  editText: {
    color: "white",
    fontWeight: "bold",
  },

  galleryTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 12,
  },

  postImage: {
    flex: 1,
    height: 150,
    borderRadius: 12,
    margin: 4,
    maxWidth: "48%",
  },
});