import { GestureResponderEvent, Text, View } from "react-native";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import SearchButton from "../../components/UI/SearchButton";
import { FC, useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import WeatherForecast from "../../components/WeatherForecast";
import { getWeeklyWeather, searchCities } from "../../utils";
import theme from "../../styles/theme";

// Define the type for the route params
type WeatherRouteParams = {
  longitude?: number;
  latitude?: number;
  city?: string;
};


const Weather: FC = () => {
  const [query, setQuery] = useState("");
  const [weeklyWeather, setWeeklyWeather] = useState<ForecastDay[]>([]);
  const route = useRoute<RouteProp<{ params: WeatherRouteParams }>>();
  const longitude = route?.params?.longitude ?? 50.4501;
  const latitude = route?.params?.latitude ?? 30.5234;
  const city = route?.params?.city ?? "Kyiv";
  const [currentCity, setCurrentCity] = useState(city);
  

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeeklyWeather(latitude, longitude);
      setWeeklyWeather(data);
    };
    fetchWeather();
    setCurrentCity(city)
  }, [latitude, longitude]);

  const handleSearch = async (value: GestureResponderEvent) => {
    if (query.length > 0) {
      const results = await searchCities(query);
      const mappedResults = results.map(
        (item: any) => item.structured_formatting.main_text
      );
      const resp = await getWeeklyWeather(0, 0, mappedResults[0])
      setCurrentCity(mappedResults[0])
      setWeeklyWeather(resp);
    }
  };

  return (
    <Container>
      <View style={{ flexDirection: "row" }}>
        <Input
          value={query}
          onChangeText={(value: string) => setQuery(value)}
          placeholder={"Search city"}
        />
        <SearchButton onPress={handleSearch} />
      </View>
      {latitude && (
        <>
          <Text style={{ textAlign: 'center', marginBottom: 10, marginTop: 10, fontSize: theme.fontSizes.medium }}>Weather for {currentCity}</Text>
          <View style={{ flex: 1 }}>
            <WeatherForecast
              weeklyWeather={weeklyWeather}
            />
          </View>
        </>
      )}
    </Container>
  );
};

export default Weather;
