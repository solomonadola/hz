import React from "react";
import { View, Text } from "react-native";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.nav}>
      <Bars3CenterLeftIcon
        color="white"
        size={30}
        onPress={() => navigation.navigate("ProfileScreen")}
        accessibilityLabel="menu button"
        accessibilityHint="double tap to open the menu"
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Icon name="audiotrack" size={30} color="white" />
        <Text style={{ color: "white", fontWeight: "bold" }}>Rhema</Text>
        <Text
          style={{
            position: "absolute",
            color: "white",
            backgroundColor: "red",
            borderRadius: 50,
            paddingHorizontal: 2,
            paddingVertical: 1,
            left: 70,
            top: 0,
            fontSize: 10,
          }}
        >
          12
        </Text>
      </View>
      <Feather
        name="search"
        size={30}
        color="white"
        accessibilityLabel="search button"
        accessibilityHint="double tap to open the search bar"
      />
    </View>
  );
};

export default Navbar;

const styles = {
  nav: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
};
