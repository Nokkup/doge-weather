import DogeIcons from "./dogeType";

interface IWeatherInfo {
    coord: {
        lon: number;
        lat: number;
    };
    weather: Array<{
        id: number;
        main: DogeIcons;
        description: string;
        icon: string;
    }>;
    main: {
        temp: number;
        feels_like: number;
    };
    name: string;
};

export default IWeatherInfo;
