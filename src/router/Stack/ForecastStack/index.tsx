import AirConditionDetails from "@/screens/AirConditionDetails";
import Forecast from "@/screens/Forecast";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ForecastStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="forecast"
        component={Forecast}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="airConditions" component={AirConditionDetails} />
    </Stack.Navigator>
  );
};
export default ForecastStackNavigator;
