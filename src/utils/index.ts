import axios from "axios";
import { API_KEY, API_PLACES_KEY, API_PLACES_URL, API_URL } from "../constants/config";

export const getWeeklyWeather = async (latitude?: number, longitude?: number, city?: string): Promise<ForecastDay[]> => {
    const searchParams = city ? `${city}` : `${latitude},${longitude}`
    try {
      const response = await axios.get<WeatherResponse>(API_URL, {
        params: {
          key: API_KEY,
          q: searchParams,
          days: 7,
          aqi: 'no',
          alerts: 'no',
        },
      });
      return response.data.forecast.forecastday;
    } catch (error) {
      console.error(error);
      return [];
    }
  };  

 export const getWeather = async (latitude: number, longitude: number): Promise<number> => {
      try {
        const response = await axios.get<WeatherResponse>(API_URL, {
          params: {
            key: API_KEY,
            q: `${latitude},${longitude}`,
            days: 7,
            aqi: 'no',
            alerts: 'no',
          },
        });
        return response.data.current.temp_c;
      } catch (error) {
        console.error(error);
        return 0;
      }
};  


export const searchCities = async (query: string) => {
  try {
    const response = await axios.get(
      `${API_PLACES_URL}json?input=${query}&types=(cities)&key=${API_PLACES_KEY}`
    );
    return response.data.predictions;
  } catch (error) {
    console.error(error);
    return [];
  }
};

