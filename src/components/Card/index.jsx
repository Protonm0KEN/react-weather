import React from 'react';

import styles from './Card.module.scss';
import WeatherIcons from "../../assets/icons/WeatherIcons";
const Card = ({ days }) => {
    const { dt, temp, weather } = days
    const getUnix = (option) => {
        const now = new Date(dt * 1000)
        let res = option === 'month' ? now.toLocaleString('ru-RU', { month: 'long' })
            : option === 'weekday' ? now.toLocaleString('ru-RU', { weekday: 'long' })
                : option === "day" ? now.toLocaleString('ru-RU', { day: 'numeric' })
                    : ''
         return res
    }
    return (
        <div className={styles['card']}>
            <div className={styles['card__day']}>
                { getUnix('weekday')[0].toUpperCase() +  getUnix('weekday').slice(1)}
            </div>
            <div className={styles['card__date']}>
                { getUnix('day')  } {getUnix('month')}
            </div>
            <div className={styles['card__img']}>
                {<WeatherIcons id={weather[0].description} size="30%" />}
            </div>
            <div className={styles['card__temp']}>
                {Math.trunc(temp.day)}°
            </div>
            <div className={styles['card__tempNight']}>
                {Math.trunc(temp.night)}°
            </div>
            <div className={styles['card__info']}>
                {weather[0].description}
            </div>
        </div>
    )
}
export default Card;
