import React from 'react';

import SlideBanner from '../slidebanner/SlideBanner';
import DailyLook from '../dailylook/DailyLook';
import './SampleText.css';

const SampleText = () => {
    return (
        <div className='listApi'>
            <SlideBanner/>
            <DailyLook/>
        </div>
    );
};

export default SampleText;