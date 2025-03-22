import { useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  SafeAreaView,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";

import Navbar from "../components/Navbar";
import StoreInformation from "../components/StoreInformation";

const HomeScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const statusBarHeight = Platform.OS === "ios" ? getStatusBarHeight() : StatusBar.currentHeight || 0;

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("transparent");
      NavigationBar.setVisibilityAsync("hidden");
      NavigationBar.setBehaviorAsync("overlay-swipe");
    }
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: "black" }]}>
      <ImageBackground
        source={require("../../assets/tshirt.jpg")}
        resizeMode="cover"
        style={[styles.img, { width, height: height + statusBarHeight }]}
      />
      <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
        <View style={styles.contentContainer}>
          <Navbar navigation={navigation} />
          <StoreInformation />
        </View>
      </SafeAreaView>
    </View>
  );
};

// Helper function to get status bar height for iOS
function getStatusBarHeight() {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;
  const { height: W_HEIGHT, width: W_WIDTH } = useWindowDimensions();
  let statusBarHeight = 20;

  if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
    if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
      statusBarHeight = 44;
    } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
      statusBarHeight = 44;
    } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === 812) {
      statusBarHeight = 44;
    }
  }

  return statusBarHeight;
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    fontFamily: "Poppins-Regular",
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
});