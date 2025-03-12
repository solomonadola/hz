import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeScreen"
      >
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
