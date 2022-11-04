import React, {useState} from 'react';
import useGeolocation from "react-hook-geolocation";
import Weather from './Weather';
import Adress from './Adress';
import WeatherCloth from './WeatherCloth';
import './WeatherLook.css'


const WeatherLook = () => {
    const geolocation =  useGeolocation();
    console.log(geolocation.latitude)
    const [temperature, setTemperature] = useState();
    return(
        <div className='allblock'>
            <div className='Weather_Adress_infoBox'>

            <Weather
            latitude = {geolocation.latitude}
            longitude = {geolocation.longitude}
            setTemperature = {setTemperature}/>
             <Adress
            latitude = {geolocation.latitude}
            longitude = {geolocation.longitude}
            temperature = {temperature}/>

            </div>

            <div className='Weather_Adress_imgBox'>
                <WeatherCloth temperature = {temperature}/>
            </div>
        </div>
    )
}


export default WeatherLook;