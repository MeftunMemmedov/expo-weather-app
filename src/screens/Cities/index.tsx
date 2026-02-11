import Container from "@/components/Container";
import { View, Text, Pressable } from "react-native";
import { citiesStyles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeCityFromStorage, setCurrentCity } from "@/store/city/actions";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Cities = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const dispatch = useAppDispatch();
  const { isLoading, savedCities, currentCity } = useAppSelector(
    (store) => store.city,
  );

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
                  {currentCity?.id === data.item.id && (
                    <FontAwesome6
                      name="location-crosshairs"
                      size={30}
                      color="white"
                    />
                  )}
                </View>
              )}
              renderHiddenItem={(data) => (
                <View style={citiesStyles.singleCityHiddenBg}>
                  {currentCity?.id === data.item.id ? (
                    <View></View>
                  ) : (
                    <Pressable
                      style={[
                        citiesStyles.singleCityHiddenBgBtn,
                        {
                          backgroundColor: "#aaaecc",
                        },
                      ]}
                      onPress={() => {
                        dispatch(setCurrentCity(data.item));
                      }}
                    >
                      <FontAwesome6
                        name="location-crosshairs"
                        size={30}
                        color="black"
                      />
                    </Pressable>
                  )}
                  {currentCity?.id === data.item.id ? (
                    <View></View>
                  ) : (
                    <Pressable
                      style={[
                        citiesStyles.singleCityHiddenBgBtn,
                        {
                          backgroundColor: "#fa5c43",
                        },
                      ]}
                      onPress={() =>
                        dispatch(removeCityFromStorage({ newCity: data.item }))
                      }
                    >
                      <FontAwesome name="close" size={30} color="white" />
                    </Pressable>
                  )}
                </View>
              )}
              rightOpenValue={-95}
              leftOpenValue={95}
              leftActionValue={95}
              rightActionValue={-95}
            ></SwipeListView>
          </View>
        )}
      </View>
    </Container>
  );
};

export default Cities;
