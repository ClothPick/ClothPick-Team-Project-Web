import React from 'react';
import Header from '../Header/community_header'
import { BiTime, BiMessage } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import './NoticeBoard/CSSClothRecommend.css'

const DetailPage = () => {
    return (
        <div>
            <Header />
            <div className='m-l-200'>
                <h2>옷 추천 게시판</h2>
                <h1>제목</h1>
                <h2>닉네임</h2>
                <div className='flex'>
                    <BiTime size='40' className='m-t-10' />
                    <h3>3분 전</h3>
                    <BiMessage size='40' className='m-t-10 text-margin-left-30' />
                    <h3>3</h3>
                    <BsFillPencilFill size='40' className='m-t-10 text-right m-r-200' />
                </div>
            </div>
            <hr className='line' />
            <div className='text-top-2 center'>
                <h1>내용</h1>
                <img className='img-size' alt='' src={require('../../img/cloth1.png')} />
            </div>
        </div>
    );
};

export default DetailPage;