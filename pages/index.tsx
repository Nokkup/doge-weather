import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { getCurrentWeather } from "../api";
import BottomLink from "../components/Links/BottomLink/BottomLink";
import IWeatherInfo from "../types/weatherType";

export default function Home() {
    const [weather, setWeather] = useState<IWeatherInfo>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            const { latitude, longitude } = position.coords;
            getCurrentWeather(latitude, longitude)
                .then((res) => res.data)
                .then((res) => setWeather(res as IWeatherInfo));
        });
    }, []);

    return (
        <Layout title="Doge Weather">
            <WeatherCard weatherInfo={weather} />
            <BottomLink href="/doges">doges</BottomLink>
        </Layout>
    );
}
