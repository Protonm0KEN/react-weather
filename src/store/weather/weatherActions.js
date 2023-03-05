import axios from "axios";

export const GET_WEATHER = '@@weather/GET_WEATHER';


const getWeather = (weather) => ({
    type: GET_WEATHER,
    payload: weather
})


export const loadWeather = (city) => async (dispatch) => {
    let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=42755217e4c25b3e270fc8ec31fb8da1`)
    let { data } = res
    let res2 = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&lang=ru&exclude=minutely,hourly,alerts&appid=42755217e4c25b3e270fc8ec31fb8da1`)
    let { data: newData } = res2
    let name = data[0].name
    let weatherObj = { ...newData, name}
    console.log(weatherObj);
    dispatch(getWeather(weatherObj))
}



