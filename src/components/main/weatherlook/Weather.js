import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import './Weather.css';
const Weather = (props) => {
    // 상태 변수 정의
    const latitude = props.latitude;
    const longitude = props.longitude;
    const apiKey = 'f35fab99afef9ba0593e1365bac7f5d7';
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    // const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
    const [imgicon, setImgIcon] = useState();
    // console.log(props.latitude);
    // console.log(props.longitude);
    const [constructor, setConstructor] = useState({ temp: 0, desc: '', icon: '', loading: true });
    useEffect(()=>{
        if(props.latitude !== null && props.longitude !== null ){
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`;
        axios.get(url)
            .then(responseData => {
                // console.log(responseData);
                const data = responseData.data;
                setConstructor({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
                props.setTemperature(Math.round(data.main.temp -  273.15))
                setImgIcon(`http://openweathermap.com/img/w/${data.weather[0].icon}.png`)
            })
            .catch(error => console.log(error));
        }
    },[props.latitude, props.longitude])
    const weathertext = (weathertext) => {
        if(weathertext === 'clear sky') {return '맑은 하늘'}
        else if(weathertext === 'few clouds') {return '구름 조금'}
        else if(weathertext === 'scattered clouds') {return '구름'}
        else if(weathertext === 'broken clouds') {return '구름 많음'}
        else if(weathertext === 'shower rain') {return '소나기'}
        else if(weathertext === 'rain') {return '비'}
        else if(weathertext === 'thunderstorm') {return '천둥 번개'}
        else if(weathertext === 'snow') {return '눈'}
        else if(weathertext === 'mist') {return '안개'}
        else{return '???'}
    }
    // 날씨 정보 출력
           return(
            imgicon === undefined ? <p>Loading</p> :
            <div className="Weather_infoBox">
                    <img src={imgicon} alt='' className='Weather_imgbox'/>
                    <div className='Wather_infoTextBox'>
                        <p className='Wather_infoText'>{Math.round(constructor.temp -  273.15)} 도</p>
                        <p className='Wather_infoText'>{weathertext(constructor.desc)}</p>
                        <p className='Wather_infoText'>{constructor.desc}</p>
                    </div>
            </div>
           )

}

export default Weather;