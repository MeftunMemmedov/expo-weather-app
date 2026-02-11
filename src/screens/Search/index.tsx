import Container from "@/components/Container";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { searchStyles } from "./style";
import { primary_text_color } from "@/constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CityData, RootStackParamList } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addCityToStorage, removeCityFromStorage } from "@/store/city/actions";
import { useEffect, useState } from "react";
import axiosInstance from "@/api";

const Search = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const dispatch = useAppDispatch();
  const { savedCities } = useAppSelector((store) => store.city);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedVal, setDebouncedVal] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CityData[]>([]);
  const [error, setError] = useState<string>("");

  const getSearchResults = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.get(`/search.json`, {
        params: { q: debouncedVal },
      });
      setSearchResults(data);
    } catch (error) {
      console.log(error);
      setError("An error occured. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(searchInput);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (debouncedVal !== "") getSearchResults();
  }, [debouncedVal]);
  return (
    <Container scroll>
      <View style={searchStyles.formContainer}>
        <TextInput
          style={searchStyles.searchInput}
          placeholder="Search"
          placeholderTextColor={primary_text_color}
          onChangeText={setSearchInput}
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
        {isLoading ? (
          <ActivityIndicator size={100} color={primary_text_color} />
        ) : debouncedVal !== "" && searchResults.length == 0 ? (
          <View>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              No Results
            </Text>
          </View>
        ) : (
          searchResults.map((result, index) => (
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
                    if (savedCities.some((city) => city.id === result.id)) {
                      dispatch(removeCityFromStorage({ newCity: result }));
                    } else {
                      dispatch(addCityToStorage({ newCity: result }));
                    }
                  }}
                >
                  {savedCities.some((city) => city.id === result.id) ? (
                    <MaterialCommunityIcons
                      name="delete-forever"
                      size={24}
                      color={primary_text_color}
                    />
                  ) : (
                    <AntDesign
                      name="plus"
                      size={24}
                      color={primary_text_color}
                    />
                  )}
                </Pressable>
              </View>
            </View>
          ))
        )}
      </View>
    </Container>
  );
};

export default Search;
