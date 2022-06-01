import React from 'react';
import Text from '../Text';
import Styles from './other_day.module.css'
import Images from "../../constants/Images";


const OtherDayWeather = () => {
    return (
        <div className={`${Styles.mainContainer} py-2 d-flex flex-column  align-items-center`}>
            <Text className={`${Styles.dayText}`}>Monday</Text>
            <img src={Images.cloudySun} className={`${Styles.weatherIcon}`} alt="weather-icon" />
            <Text className={`${Styles.tempText}`}>17° C</Text>
        </div>
    );
}

export default OtherDayWeather;
