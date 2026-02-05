import Cities from "@/screens/Cities";
import Search from "@/screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CityStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="SearchCity" component={Search} />
    </Stack.Navigator>
  );
};

export default CityStack;
