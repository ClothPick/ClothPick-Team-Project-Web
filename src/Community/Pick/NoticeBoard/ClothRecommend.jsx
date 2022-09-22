// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import React, { useState } from 'react';
import Header from '../../Header/community_header'
import './CSSClothRecommend.css'
import { AiFillSkin, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';


const Freedom = () => {

    const [scrapChecked, setScrapChecked] = useState({
        number1: false,
        number2: false
    });

    const { number1, number2 } = scrapChecked;

    const handleScrapButton = (e) => {
        setScrapChecked({
            ...scrapChecked,
            [e.target.name]: e.target.value
        });

        console.log(e.target.name);

        switch (e.target.name) {
            case '1':
                setScrapChecked({
                    ...scrapChecked,
                    [e.target.value]: true
                });
                console.log(number1);
                break;

            case '2':
                setScrapChecked({
                    ...scrapChecked,
                    [e.target.value]: true
                });
                console.log(number2);
                break;
        }
        // scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }

    return (
        <div>
            <Header />
            <div className='text-margin-left-200'>
                <AiFillSkin size="80" />
                <h1 className='text-margin-left-10'>옷 추천</h1>
            </div>
            <div className='box'>
                <div className='noticeBoard border-right'>
                    <div className='text-margin-left-10'>
                        <h2>제목</h2>
                        <h4>내용 한 줄</h4>
                    </div>
                    <h5 className='text-margin-left-10 text-margin-top-150'>작성자</h5>
                    <div className='text-margin-left-10 flex'>
                        <BiMessage size='20' className='text-top-2' />
                        <h4 className='text-margin-left-10'>3</h4>
                        <h4 className='text-margin-left-30'>3분 전</h4>

                        {scrapChecked ?
                            <AiOutlineHeart number1='1' value={number1} size='35' className='text-top-1 text-right text-margin-right-10 scrap' onClick={handleScrapButton} /> :
                            <AiFillHeart number1='1' value={number1} size='35' color='red' className='text-top-1 text-right text-margin-right-10 scrap' onClick={handleScrapButton} />}

                    </div>

                </div>

                <div className='noticeBoard'>
                    <div className='text-margin-left-10'>
                        <h2>제목</h2>
                        <h4>내용 한 줄</h4>
                    </div>
                    <h5 className='text-margin-left-10 text-margin-top-150'>작성자</h5>
                    <div className='text-margin-left-10 flex'>
                        <BiMessage size='20' className='text-top-2' />
                        <h4 className='text-margin-left-10'>3</h4>
                        <h4 className='text-margin-left-30'>3분 전</h4>

                        {scrapChecked ?
                            <AiOutlineHeart number2='2' value={number2} size='35' className='text-top-1 text-right text-margin-right-10 scrap' onClick={handleScrapButton} /> :
                            <AiFillHeart number2='2' value={number2} size='35' color='red' className='text-top-1 text-right text-margin-right-10 scrap' onClick={handleScrapButton} />}
                        {/* {scrapChecked ?
                            <AiOutlineHeart size='35' className='text-top-1 text-right text-margin-right-10 scrap' onClick={handleScrapButton} /> :
                            <AiFillHeart size='35' color='red' className='text-top-1 text-right text-margin-right-10 scrap' onClick={handleScrapButton} />} */}
                    </div>

                </div>
            </div>

            <div className='box'>
                <div className='noticeBoard border-right'>
                    하이
                </div>
                <div className='noticeBoard'>
                    하이
                </div>
            </div>

            <div className='box'>
                <div className='noticeBoard border-right'>
                    하이
                </div>
                <div className='noticeBoard'>
                    하이
                </div>
            </div>
        </div>
    );
};

export default Freedom;