export type RequestWeather = {
    city: string,
    unit: WeatherUnit
}

export enum WeatherUnit {
    Metric,
    Imperial
}

export type apiItem = {
    q: string;
    unit: string;
    appid: string
}

export type WeatherItem = {
    city: string,
    temp: number;
    description: string;
    descriptionName?: string;
    icon?: string;
}