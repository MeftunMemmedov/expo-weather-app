import Container from "@/components/Container";
import { View, Text, Pressable } from "react-native";
import { citiesStyles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCitiesFromStorage } from "@/store/city/actions";

const Cities = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const dispatch = useAppDispatch();
  const { isLoading, savedCities, currentCity } = useAppSelector(
    (store) => store.city,
  );

  useEffect(() => {
    if (currentCity == null) {
      dispatch(getCitiesFromStorage());
    }
  }, [currentCity]);
  return (
    <Container scroll>
      <View style={citiesStyles.mainContainer}>
        <Text style={citiesStyles.screenTitle}>My Cities</Text>
        <Pressable
          style={citiesStyles.searchInputBtn}
          onPress={() => navigation.navigate("SearchCity")}
        >
          <Text style={citiesStyles.searchInputBtnText}>Search for cities</Text>
        </Pressable>
        {isLoading ? (
          <View>
            <Text style={{ color: "white" }}>LOADING//</Text>
          </View>
        ) : savedCities?.length === 0 ? (
          <View>
            <Text style={{ color: "white" }}>No City Found</Text>
          </View>
        ) : (
          <View>
            <SwipeListView
              data={savedCities}
              renderItem={(data) => (
                <View style={citiesStyles.singleCityItem}>
                  <View style={citiesStyles.singleCityLeftSide}>
                    <Text style={citiesStyles.singleCityName}>
                      {data.item.name}
                    </Text>
                    <Text style={citiesStyles.singleCityTime}>
                      {data.item.country}
                    </Text>
                  </View>
                  {/* <Text style={citiesStyles.singleCityTemp}>
                  {data.item.temprature}°
                </Text> */}
                </View>
              )}
              renderHiddenItem={(data) => (
                <View style={citiesStyles.singleCityHiddenBg}>
                  <Pressable
                    style={citiesStyles.singleCityHiddenBgBtn}
                    // onPress={() => removeCity(data.item.lat, data.item.lon)}
                  >
                    <FontAwesome name="close" size={30} color="white" />
                  </Pressable>
                </View>
              )}
              rightOpenValue={-95}
              leftActionValue={95}
            ></SwipeListView>
          </View>
        )}
      </View>
    </Container>
  );
};

export default Cities;
