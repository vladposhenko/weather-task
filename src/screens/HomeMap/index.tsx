import { View } from "react-native"
import Container from "../../components/UI/Container"
import MapView, { LongPressEvent, Marker } from 'react-native-maps';
import { FC, useState } from "react";
import CustomMarker from "../../components/UI/CustomMarker";
import * as Location from 'expo-location';
import { Weather } from "../../constants/routes";
import { getWeather } from "../../utils";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../Navigation";
import { DEFAULT_LOCATION, mapJSON } from "../../constants/config";
import styles from "./styles";

interface IHomeMapProps {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

const HomeMap: FC<IHomeMapProps> = ({ navigation }) => {
    const [marker, setMarker] = useState<{ latitude: number; longitude: number }>({ latitude: 0, longitude: 0 });
    const [city, setCity] = useState<string | null>('Kyiv');
    const [weather, setWeather] = useState<number>(0);


    const handleLongPress = async (event: LongPressEvent) => {
        const { coordinate } = event.nativeEvent;
        setMarker({
            latitude: coordinate.latitude,
            longitude: coordinate.longitude
        })
        getCityFromCoordinates(coordinate.latitude, coordinate.longitude)
        const currentWeather = await getWeather(coordinate.latitude, coordinate.longitude)
        setWeather(currentWeather)
    }

    const handleMarkerPress = () => {
        navigation.navigate(Weather, {
            latitude: marker.latitude,
            longitude: marker.longitude,
            city
        })
    }

    const getCityFromCoordinates = async (latitude: number, longitude: number) => {
        try {
            const response = await Location.reverseGeocodeAsync({ latitude, longitude });
            if (response.length > 0) {
                const { city } = response[0];
                setCity(city);
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <Container>
            <View style={styles.innerContainer}>
                <MapView 
                    style={styles.mapStyle}
                    onLongPress={handleLongPress}
                    customMapStyle={mapJSON}
                    initialRegion={{
                        ...DEFAULT_LOCATION,
                        latitudeDelta: 0.0922,  // Adjust for zoom level
                        longitudeDelta: 0.0421,
                      }}
                >
                    {marker && (
                        <Marker onPress={handleMarkerPress} coordinate={marker} anchor={{ x: 0.5, y: 1 }}>
                            <CustomMarker city={city} temperature={weather}/>
                        </Marker>
                    )}
                </MapView>
            </View>
        </Container>
    )
}

export default HomeMap

  