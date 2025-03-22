import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const StoreReaction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.reactionContainer}>
        <View style={styles.reactionItem}>
          <AntDesign name="hearto" size={26} color="white" />
          <Text style={styles.reactionText}>22.9k</Text>
        </View>
        <View style={styles.reactionItem}>
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={26}
            color="white"
            accessibilityLabel="comment button"
            accessibilityHint="double tap to comment on the store"
          />
          <Text style={styles.reactionText}>8.9k</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rate Us</Text>
        <Text style={styles.starRating}>⭐⭐⭐⭐⭐</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Divide into two halves
    width: "100%",
  },
  reactionContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Even spacing within reactionContainer
    flex: 1, // Take up half the available space
  },
  reactionItem: {
    alignItems: "center",
  },
  reactionText: {
    color: "white",
  },
  ratingContainer: {
    alignItems: "center",
    flex: 1, // Take up half the available space
  },
  ratingText: {
    color: "white",
  },
  starRating: {
    color: "white",
  },
});

export default StoreReaction;