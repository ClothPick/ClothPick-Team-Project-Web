import React, { useState, useEffect } from 'react';
import Header from '../../Header/community_header'
import './CSSNoticeBoard.css'
import { AiFillSkin, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import TestMethod from "../../../Test/TestMethod";
import { Link } from 'react-router-dom';
import ConvenMethod from '../../../Test/ConvenMethod';

const ClothRecommend = () => {
    const [scrapChecked, setScrapChecked] = useState(true);
    const [community, setCommunity] = useState([]);
    const [click, setClick] = useState(true);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
            });
        };
        getData();
    }, [click]);

    const handleScrapButton = () => {
        scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }

    return (
        <div>
            <Header />
            <div className='text-margin-left-200'>
                {/* <div className=''> */}
                <AiFillSkin size="80" color='#BDC2BB' />
                <h2 className='text-margin-top-30 text-margin-left-10'>옷 추천</h2>
            </div>

            <div className='box inline-block p-l-300'>
                {community
                    .filter((data) => data.boardType == '1')
                    .map((data, index) => (
                        <div className='inline-block border-side'>
                            <Link to={`/detailpage/${data.boardId}`} className='decoration'>
                                <div className='noticeBoard' key={index}>
                                    {/* {console.log("index : " + index)} */}
                                    <div className='text-margin-left-10'>
                                        <div>
                                            <li className='li-style'><h2>{data.boardTitle}</h2></li>
                                            <li className='li-style'><h3>{data.boardContent}</h3></li>
                                        </div>
                                    </div>


                                    <h4 className='text-margin-left-10 text-margin-top-150'>{data.userName}</h4>
                                </div>
                            </Link>
                            <div className='text-margin-left-10 flex'>
                                <BiMessage size='20' className='text-top-2' />
                                <h4 className='text-margin-left-10'>3</h4>
                                <h4 className='text-margin-left-30'>{ConvenMethod.handleTime(data.createAt)}</h4>

                                {scrapChecked ?
                                    <AiOutlineHeart size='35' className='text-top-1 text-right scrap' onClick={() => handleScrapButton()} /> :
                                    <AiFillHeart size='35' color='red' className='text-top-1 text-right scrap' onClick={() => handleScrapButton()} />}
                            </div>
                        </div>
                    ))}

            </div>
        </div >
    );
};


export default ClothRecommend;