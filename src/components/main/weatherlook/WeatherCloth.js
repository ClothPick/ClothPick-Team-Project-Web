import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ResourMethod from '../../../apis/ResourcesMethod';
import './WeatherCloth.css';
const WeatherCloth = (props) => {
    const [blockcheck1 , setBlockCheck1] = useState(false);
    const [blockcheck2 , setBlockCheck2] = useState(false);
    const [blockcheck3 , setBlockCheck3] = useState(false);
    const [checks, setCheck] = useState(true);
    const [dailyimglist, setDailyImgList] = useState([]);
    const [weatherimglist, setWeatherImgList] = useState([]);

    useEffect(() => {
        if(props.temperature !== undefined){
        const get = ResourMethod.WeatherList(props.temperature);
        const getData = () => {
            get.then(data => {
            for(let i=0; i<data.length; i++){
                setWeatherImgList(weatherimglist => [...weatherimglist, `http://192.168.0.101:8087/api/v1/displayimg/resources/weather/${data[0].slice(0, -12)}/${data[i]}`])
            }

            });
        };
        getData();
        setCheck(false)
    }
    console.log('z')
    }, [props.temperature]);
    return(
        <div className='WeatherCloth_Component'>
                 <p>이 날씨엔 이옷을 입어야 해요</p>
            <div className='WeatherCloth_IconBox'>
                    <img src={weatherimglist[3]} alt='' className='WeatherCloth_Real'/>
                    <img src={weatherimglist[4]} alt='' className='WeatherCloth_Real'/>
                    <img src={weatherimglist[5]} alt='' className='WeatherCloth_Real'/>
            </div>
        </div>

    );

}

export default WeatherCloth;