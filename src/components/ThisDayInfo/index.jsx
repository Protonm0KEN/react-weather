import React from 'react'

import ThisDayItem from './ThisDayItem';
import styles from './ThisDayInfo.module.scss';
import cloud from '../../assets/images/cloud.png'
import { useSelector } from 'react-redux';
import { selectWeather } from '../../store/weather/weatherSelectors';


const ThisDayInfo = () => {
    const weather = useSelector(selectWeather)
    const {current} = weather
    const temp = Math.trunc(current.temp)
    const feelsLikeTemp = Math.trunc(current.feels_like)
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${temp} - ощущается как ${feelsLikeTemp}°`
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${current.pressure}мм ртутного столба - нормальное`
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: current.weather[0].descript === "дождь" ? 'Дождь' : "Без осадков"
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.trunc(current.wind_speed)} м/с`
        },
    ]


    return (
        <div className={styles['thisDayInfo']}>
            <div className={styles['thisDayInfo__items']}>
                {items.map(item => (
                    <ThisDayItem key={item.icon_id} item={item} />
                ))}
            </div>
            <img src={cloud} alt="cloud" />
        </div>
    )
}

export default ThisDayInfo