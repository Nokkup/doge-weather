import React, { useEffect } from "react";
import IWeatherInfo from "../../types/weatherType";
import Doge from "../Doge/Doge";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./WeatherCard.module.scss";

interface WeatherCardProps {
    weatherInfo?: IWeatherInfo;
}

const WeatherCard = ({ weatherInfo }: WeatherCardProps) => {
    return (
        weatherInfo && (
            <div className={styles.WeatherCard}>
                <div className={styles.WeatherCard__top}>
                    <div className={styles.WeatherCard__location}>
                        {weatherInfo.name}
                    </div>
                    <WeatherIcon icon={weatherInfo.weather.at(-1).icon} />
                </div>

                <div className={styles.WeatherCard__main}>
                    <div className={styles.WeatherCard__temperature}>
                        {Math.ceil(weatherInfo.main.temp)}°
                    </div>

                    <div className={styles.WeatherCard__temperature_feelsLike}>
                        feels like
                        <div>{Math.ceil(weatherInfo.main.feels_like)}°</div>
                    </div>
                </div>

                <div className={styles.WeatherCard__bottom}>
                    <div className={styles.WeatherCard__description}>
                        {weatherInfo.weather.at(-1).main}
                    </div>
                    <Doge dogeIcon={weatherInfo.weather.at(-1).main} />
                </div>
            </div>
        )
    );
};

export default WeatherCard;
