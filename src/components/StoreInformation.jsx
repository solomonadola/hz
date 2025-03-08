import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import StoreProfile from "./StoreProfile";
import StoreReaction from "./StoreReaction";

const StoreInformation = () => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={styles.background}
      />
      <View>
        <StoreProfile />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <EvilIcons name="location" size={22} color="white" />
          <Text style={{ color: "white", fontSize: 16 }}>Calfornia, USA</Text>
        </View>
        <Text style={{ color: "white", fontSize: 14 }}>
          Buy orginal Watches with full 1 year warranty up to 1 year.
        </Text>
        <Text style={{ color: "gold", fontSize: 14 }}>
          #WatchShop #MenWatch
        </Text>
        <Text style={{ color: "white", fontSize: 14 }}>
          GitHub-herudi/antd-button-color:Simple butto...
        </Text>
        <StoreReaction />
      </View>
    </View>
  );
};

export default StoreInformation;

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    padding: 20,
    height: 270,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 270,
  },
});
