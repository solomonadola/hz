import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Navbar from "../components/Navbar";
import StoreInformation from "../components/StoreInformation";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/she.jpg")}
        resizeMode="cover"
        style={styles.img}
      />
      <Navbar navigation={navigation} />
      <StoreInformation />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    position: "relative",
  },
  img: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
