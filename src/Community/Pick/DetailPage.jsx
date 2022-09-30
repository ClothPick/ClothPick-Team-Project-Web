import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BiTime, BiMessage } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillLike, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './NoticeBoard/CSSClothRecommend.css'
import Header from '../Header/community_header'
import TestMethod from '../../Test/TestMethod';
import Comment from './Comment'
import data from '../../Closet/Accordion/data';

const DetailPage = () => {
    const [community, setCommunity] = useState([]);
    const [content, setContent] = useState('');
    const [scrapChecked, setScrapChecked] = useState(true);
    const [title, setTitle] = useState([]);
    const [userName, setUserName] = useState('');
    const [click, setClick] = useState(true);
    const [recommend, setRecommend] = useState(0);
    const [id, setId] = useState([]);

    // URL 주소값
    var url = window.location.pathname.split('/')[2];
    console.log('url : ' + window.location.pathname.split('/')[2]);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                console.log('data : ' + data);

                // 현재 로그인이 되어있지 않기 때문에 임의로 0번째 닉네임을 가져와서 사용한다.
                setUserName(data[0].userName);
                console.log('name : ' + data[0].userName);

                // URL 주소값과 boardId의 값이 같으면 그 정보를 화면에 띄운다.
                for (var i = 0; i < data.length; i++) {
                    if (url == data[i].boardId) {
                        setTitle(data[i].boardTitle);
                        setContent(data[i].boardContent);

                        console.log(data[i].boardTitle);
                        console.log(data[i].boardContent);
                    }
                }
            });
        };
        getData();
    }, [click]);

    const handleScrapButton = () => {
        scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }
    // console.log('첫 번째 title : ' + community[0].title);

    return (
        <div>
            <Header />
            <div className='white-space'>
                {/* 게시물 header */}
                <div className='m-l-200'>
                    <h2>옷 추천 게시판</h2>
                    <h1>{title}</h1>
                    <h2>{userName}</h2>
                    <div className='flex'>
                        <BiTime size='40' className='m-t-10' />
                        <h3>3분 전</h3>
                        <BiMessage size='40' className='m-t-10 text-margin-left-30' />
                        <h3>3</h3>
                        {/* <AiOutlineHeart size='40' className='m-t-10 text-margin-left-30' onClick={handleScrapButton} /> */}
                        {scrapChecked ?
                            <AiOutlineHeart size='35' className='text-top-1 scrap text-margin-left-20' onClick={handleScrapButton} /> :
                            <AiFillHeart size='35' color='red' className='text-top-1 scrap text-margin-left-20' onClick={handleScrapButton} />}
                        <h3>스크랩</h3>
                        <BsFillPencilFill size='40' className='m-t-10 text-right m-r-200' />
                    </div>

                    {/* 게시물 contents */}
                </div>
                <hr className='line' />
                <div className='text-top-2 center'>
                    <h1>{content}</h1>
                    <img className='img-size' alt='' src={require('../../img/cloth1.png')} />
                </div>

                {/* 추천 수 */}
                <div className='center round-box flex scrap' onClick={() => { setRecommend(recommend + 1) }}>
                    <AiFillLike size='60' color='white' className='m-t-10' />
                    <span className='text-recom'>{recommend}</span>
                </div>
                <hr />


                {/* 댓글 */}
                <Comment />
            </div >
        </div>
    );
};

export default DetailPage;