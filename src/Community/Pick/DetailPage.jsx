import React, { useState, useEffect, useParams } from 'react';
import Header from '../Header/community_header'
import { BiTime, BiMessage } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import './NoticeBoard/CSSClothRecommend.css'
import { AiFillLike } from 'react-icons/ai'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import TestMethod from '../../Test/TestMethod';
import Comment from './Comment'

const DetailPage = () => {
    const [community, setCommunity] = useState([]);
    const [content, setContent] = useState();
    const [scrapChecked, setScrapChecked] = useState(true);
    const [title, setTitle] = useState([]);
    const [click, setClick] = useState(true);
    const [recommend, setRecommend] = useState(0);

    let { id } = useParams();

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                console.log('data : ' + data);

                // --------- 테스트 코드 ---------

                setTitle(data[id].title)
                console.log('id번째 title : ' + data[id].title);

                setContent(data[id].content);
                console.log('id번째 content : ' + data[id].content);

                // --------- 테스트 코드 ---------
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
                    <h2>닉네임</h2>
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