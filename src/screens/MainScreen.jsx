import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Navbar from "../components/Navbar";
import StoreInformation from "../components/StoreInformation";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/she.jpg")}
        resizeMode="cover"
        style={styles.img}
      />
      <Navbar />
      <StoreInformation />
    </View>
  );
};

export default MainScreen;

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
