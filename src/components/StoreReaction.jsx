import React from "react";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const StoreReaction = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "40%",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={{}}>
          <AntDesign
            name="hearto"
            size={26}
            color="white"
            accessibilityLabel="like button"
            accessibilityHint="double tap to like the store"
          />
          <Text style={{ color: "white" }}>22.9k</Text>
        </View>
        <View style={{}}>
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={26}
            color="white"
            accessibilityLabel="comment button"
            accessibilityHint="double tap to comment on the store"
          />
          <Text style={{ color: "white" }}>8.9k</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "colomn",
          alignItems: "flex-end",
          gap: 6,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 14 }}>Rate Us</Text>
        <Text style={{ fontSize: 25 }} accessibilityLabel="store rating">
          ⭐⭐⭐⭐⭐
        </Text>
      </View>
    </View>
  );
};

export default StoreReaction;
