import Container from "@/components/Container";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { searchStyles } from "./style";
import { primary_text_color } from "@/constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { results } from "@/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalData } from "@/hooks";
import { useEffect } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Search = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const { cities, getCities, addCity, removeCity } = useLocalData();
  useEffect(() => {
    getCities();
  }, []);
  return (
    <Container scroll>
      <View style={searchStyles.formContainer}>
        <TextInput
          style={searchStyles.searchInput}
          placeholder="Search"
          placeholderTextColor={primary_text_color}
        />
        <Pressable style={searchStyles.cancelSearchBtn}>
          <Text
            style={searchStyles.cancelSearchBtnText}
            onPress={() => navigation.goBack()}
          >
            Cancel
          </Text>
        </Pressable>
      </View>
      <View style={searchStyles.searchResultList}>
        {results.map((result, index) => (
          <View
            key={`search-result-${result.id}-${index}`}
            style={searchStyles.singleSearchResult}
          >
            {/* <Image
              style={searchStyles.singleResultWeatherIcon}
              source={{uri:result}}
            /> */}
            <View style={searchStyles.singleResultInfoBox}>
              <View style={searchStyles.singleResultInfos}>
                <Text style={searchStyles.singleResultInfoCityname}>
                  {result.name}
                </Text>
                <Text style={searchStyles.singleResultInfoTime}>
                  {result.country}
                </Text>
              </View>
              {/* <Text style={searchStyles.singleResultInfoTemp}>29°</Text> */}
              <Pressable
                style={{ paddingHorizontal: 10 }}
                onPress={() => {
                  if (
                    cities.some(
                      (city) =>
                        city.lat === result.lat || city.lon === result.lon,
                    )
                  ) {
                    removeCity(result.lat, result.lon);
                  } else {
                    addCity(result);
                  }
                }}
              >
                {cities.some(
                  (city) => city.lat === result.lat || city.lon === result.lon,
                ) ? (
                  <MaterialCommunityIcons
                    name="delete-forever"
                    size={24}
                    color={primary_text_color}
                  />
                ) : (
                  <AntDesign name="plus" size={24} color={primary_text_color} />
                )}
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </Container>
  );
};

export default Search;
