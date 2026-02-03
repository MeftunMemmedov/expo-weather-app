import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./BottomTabs";

const AppRouter = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default AppRouter;
