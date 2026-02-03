import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ForecastStack } from "../Stack";
import { StyleSheet } from "react-native";
import { secondary_color, secondary_text_color } from "@/constants/colors";
import Countries from "@/screens/Countries";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Settings from "@/screens/Settings";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const tabNavigattorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: secondary_text_color,
    tabBarShowLabel: false,
    tabBarIconStyle: {
      marginTop: 15,
    },
  };

  return (
    <Tab.Navigator screenOptions={tabNavigattorOptions}>
      <Tab.Screen
        name="ForecastStack"
        component={ForecastStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cloud-sun-rain" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Countries"
        component={Countries}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list-ul" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="options-sharp" size={27} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    backgroundColor: secondary_color,
  },
});
