import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import StoreReaction from "./StoreReaction";

const StoreInformation = () => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={styles.background}
      />
      <View>
        <View style={styles.main}>
          <Image
            source={require("../../assets/images/pp.jpg")}
            style={styles.profile}
            accessibilityLabel="store profile picture"
          />
          <View style={styles.profileContent}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
              The Thrift Store
            </Text>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              ⭐⭐⭐⭐⭐
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  backgroundColor: "red",
                  padding: 5,
                  borderRadius: 5,
                  width: 80,
                  textAlign: "center",
                }}
                accessibilityLabel="subscribe button"
                accessibilityHint="double tap to subscribe to the store"
              >
                Subscribe
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
        <View accessible={true}>
          <Text style={{ color: "white", fontSize: 14 }}>
            Buy orginal Watches with full 1 year warranty up to 1 year.
          </Text>
          <Text style={{ color: "gold", fontSize: 14 }}>
            #WatchShop #MenWatch
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            GitHub-herudi/antd-button-color:Simple butto...
          </Text>
        </View>
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
  profile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: "rgb(253, 175, 19)",
  },
  main: {
    flexDirection: "row",
  },
  profileContent: {
    paddingHorizontal: 10,
    gap: 5,
  },
});
