import axios from 'axios';

const API_KEY = '137901363ffc72eb5336e95029799915';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    console.log('request:', request);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}
