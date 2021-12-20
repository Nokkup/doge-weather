import axios, { AxiosResponse } from "axios";
import IWeatherInfo from "../types/weatherType";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export function getCurrentWeather(latitude: number, longitude: number): Promise<AxiosResponse> {
    return axios.get<IWeatherInfo>(API_URL, {
        params: {
            lat: latitude,
            lon: longitude,
            units: "metric",
            lang: "ru",
            appid: process.env.APP_ID,
        },
    });
}
