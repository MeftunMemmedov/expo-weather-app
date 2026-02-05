import Container from "@/components/Container";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { searchStyles } from "./style";
import { primary_text_color } from "@/constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

const Search = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
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
        {Array.from({ length: 5 }).map((_, index) => (
          <View
            key={`search-result-${index}`}
            style={searchStyles.singleSearchResult}
          >
            <Image
              style={searchStyles.singleResultWeatherIcon}
              source={require("@/assets/images/sun.png")}
            />
            <View style={searchStyles.singleResultInfoBox}>
              <View style={searchStyles.singleResultInfos}>
                <Text style={searchStyles.singleResultInfoCityname}>
                  Barcelona
                </Text>
                <Text style={searchStyles.singleResultInfoTime}>10:23</Text>
              </View>
              <Text style={searchStyles.singleResultInfoTemp}>29°</Text>
            </View>
          </View>
        ))}
      </View>
    </Container>
  );
};

export default Search;
