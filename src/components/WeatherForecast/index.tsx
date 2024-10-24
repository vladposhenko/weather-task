import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import moment from 'moment';

interface WeatherForecastProps {
  weeklyWeather: ForecastDay[];
}

  const WeatherForecast: React.FC<WeatherForecastProps> = ({ weeklyWeather }) => {
  
    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.itemContainer}>
          <Image style={{ width: 80, height: 80 }} source={{ uri: 'https:' + item.day.condition.icon }} />
          <View>
            <Text>{moment(item.date).format('dddd, MMMM D, YYYY')}</Text>
            <Text>Temperature: {item.day.avgtemp_c}°C</Text>
          </View>
        </View>
      );
  
    return (
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={weeklyWeather}
        keyExtractor={(item) => item.date}
        renderItem={renderItem}
      />
    );
  };
  
  const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
      padding: 10,
      borderBottomColor: '#000',
      borderBottomWidth: 1
    },
  });
  
  export default WeatherForecast;