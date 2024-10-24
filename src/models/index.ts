interface IWeatherData {
    dt: number;
    temp: {
      day: number;
    };
    weather: Array<{
      description: string;
    }>;
  }

interface ForecastDay {
  date: string; 
  day: {
    avgtemp_c: number; 
    condition: {
      text: string; 
      icon: string; 
    };
  };
}

interface WeatherResponse {
  current: {
    temp_c: number
  },
  forecast: {
    forecastday: ForecastDay[]; 
  };
}  

interface WeatherData {
  dt: number;
  temp: {
    day: number;
  };
  weather: Array<{
    description: string;
  }>;
}
