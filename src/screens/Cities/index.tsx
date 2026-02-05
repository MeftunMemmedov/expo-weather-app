import Container from "@/components/Container";
import { View, Text, Pressable } from "react-native";
import { citiesStyles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { useState } from "react";

const Cities = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const data = [
    {
      name: "Madrid",
      time: "10:23",
      temprature: 31,
    },
    {
      name: "Turkiye",
      time: "10:23",
      temprature: 11,
    },
    {
      name: "Madrid",
      time: "10:23",
      temprature: 20,
    },
    {
      name: "Athens",
      time: "12:23",
      temprature: 31,
    },
  ];

  const [cities, setCities] = useState(data);
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
        <View>
          <SwipeListView
            data={cities}
            renderItem={(data) => (
              <View style={citiesStyles.singleCityItem}>
                <View style={citiesStyles.singleCityLeftSide}>
                  <Text style={citiesStyles.singleCityName}>
                    {data.item.name}
                  </Text>
                  <Text style={citiesStyles.singleCityTime}>
                    {data.item.time}
                  </Text>
                </View>
                <Text style={citiesStyles.singleCityTemp}>
                  {data.item.temprature}°
                </Text>
              </View>
            )}
            renderHiddenItem={(data) => (
              <View style={citiesStyles.singleCityHiddenBg}>
                <Pressable
                  style={citiesStyles.singleCityHiddenBgBtn}
                  onPress={() =>
                    setCities((prevCities) =>
                      prevCities.filter((city) => city.name !== data.item.name),
                    )
                  }
                >
                  <FontAwesome name="close" size={30} color="white" />
                </Pressable>
              </View>
            )}
            rightOpenValue={-95}
            leftActionValue={95}
          ></SwipeListView>
        </View>
      </View>
    </Container>
  );
};

export default Cities;
