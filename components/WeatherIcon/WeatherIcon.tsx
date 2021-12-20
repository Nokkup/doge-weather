import React, { useState } from "react";
import Image from "next/image";
import styles from "./WeatherIcon.module.scss";

interface WeatherIconProps {
    icon: string;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
    return (
        <div className={styles.WeatherIcon}>
            <Image
                src={`/images/weather_icons/${icon}.png`}
                alt="weather icon"
                height={100}
                width={100}
            />
        </div>
    );
};

export default React.memo(WeatherIcon);
