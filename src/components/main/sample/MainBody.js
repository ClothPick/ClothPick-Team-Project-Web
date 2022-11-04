import React from 'react';

import SlideBanner from '../slidebanner/SlideBanner';
import DailyLook from '../dailylook/DailyLook';
import './SampleText.css';

import WeatherLook from '../weatherlook/WeatherLook';
import ColorLuk from '../colorluk/ColorLuk';
const MainBody = () => {
    return (
        <div className='MainBody_Componet'>
            <div className='listApi'>
                <SlideBanner/>
                <DailyLook/>
                <WeatherLook/>
                <ColorLuk/>
            </div>
        </div>

    );
};

export default MainBody;