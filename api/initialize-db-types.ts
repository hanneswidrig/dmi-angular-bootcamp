export interface DailyForecast {
    day: number;
    description: string;
    windSpeed: number;
    maxTemperature: number;
    avgTemperature: number;
    minTemperature: number;
}

export interface WeatherLocation {
    guid: string;
    city: string;
    state: string;
}

export interface WeatherSummary extends WeatherLocation {
    currentTemperature: number;
    currentWindSpeed: number;
    currentHumidity: number;
}

export interface WeatherDetails extends WeatherSummary {
    sunrise: Date;
    sunset: Date;
    forecast: DailyForecast[];
}

export interface Data {
    weatherSummary: WeatherSummary[];
    weatherDetails: WeatherDetails[];
}
