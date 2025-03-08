import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const StoreProfile = () => {
  return (
    <View style={styles.main}>
      <Image source={require("../../assets/pp.jpg")} style={styles.profile} />
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
          >
            Subscribe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoreProfile;

const styles = StyleSheet.create({
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
