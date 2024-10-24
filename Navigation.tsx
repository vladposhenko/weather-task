import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as routes from './src/constants/routes'
import HomeMap from "./src/screens/HomeMap";
import Weather from "./src/screens/Weather";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    [route: string]: any,
    [routes.Weather]: {
        longitude: number
        latitude: number
        city: string | null
      };
}

const Tab = createBottomTabNavigator();

const Navigation = () => {
 return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 60, paddingBottom: 10 }
            }}
        >
            <Tab.Screen 
                name={routes.HomeMap} 
                component={HomeMap} 
                options={{
                    title: 'Map',
                    headerTitle: 'Weather App',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="map" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name={routes.Weather} 
                component={Weather} 
                options={{
                    title: 'Weather',
                    headerTitle: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cloud" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
 )
}

export default Navigation