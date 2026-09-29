import { View, Text, Pressable, Alert, Linking } from "react-native";
import Container from "@/components/Container";
import { chooseLocationByStyles } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "@/store/hooks";
import { getCitiesFromStorage } from "@/store/city/actions";
import { BottomTabParamList } from "@/types";

const ChooseLocationBy = () => {
  const nav = useNavigation<NavigationProp<BottomTabParamList>>();

  const dispatch = useAppDispatch();

  const handleLocationDetect = async () => {
    const res = await dispatch(getCitiesFromStorage()).unwrap();

    if (!res.currentCity) {
      Alert.alert(
        "Location error",
        "Could not detect location. Please check your location permissions in settings.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open settings", onPress: () => Linking.openSettings() },
        ],
      );
    }
  };
  return (
    <Container scroll={false}>
      <View style={{ height: "100%" }}>
        <View style={chooseLocationByStyles.btnContainer}>
          <Pressable
            style={[{ marginBottom: 10 }, chooseLocationByStyles.btn]}
            onPress={() => nav.navigate("CityStack")}
          >
            <Text style={chooseLocationByStyles.btnText}>
              Search and select location
            </Text>
            <AntDesign name="search" size={24} color="black" />
          </Pressable>
          <Pressable
            style={chooseLocationByStyles.btn}
            onPress={handleLocationDetect}
          >
            <Text style={chooseLocationByStyles.btnText}>
              Turn on location detection
            </Text>
            <FontAwesome6 name="location-pin" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </Container>
  );
};

export default ChooseLocationBy;
