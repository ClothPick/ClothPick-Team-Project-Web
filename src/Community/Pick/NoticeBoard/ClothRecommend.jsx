import React, { useState, useEffect } from 'react';
import Header from '../../Header/community_header'
import './CSSClothRecommend.css'
import { AiFillSkin, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import TestMethod from "../../../Test/TestMethod";
import { Link } from 'react-router-dom';


const ClothRecommend = () => {
    const [scrapChecked, setScrapChecked] = useState(true);

    const [community, setCommunity] = useState([]);
    const [click, setClick] = useState(true);
    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                // setTitle(get.data[0].title)
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
                <AiFillSkin size="80" />
                <h1 className='text-margin-left-10'>옷 추천</h1>
            </div>

            <div className='box inline-block'>
                {community.map((data, index) => (
                    <div className='two-box'>
                        <Link to={`/detailpage/${data.boardId}`} className='decoration'>
                            <div className='noticeBoard' key={index}>
                                <div className='text-margin-left-10'>
                                    <div>
                                        <li className='li-style'><h2>{data.boardTitle}</h2></li>

                                        <li className='li-style'><h3>{data.boardContent}</h3></li>
                                    </div>
                                </div>


                                <h5 className='text-margin-left-10 text-margin-top-150'>{data.userName}</h5>
                            </div>
                        </Link>
                        <div className='text-margin-left-10 flex'>
                            <BiMessage size='20' className='text-top-2' />
                            <h4 className='text-margin-left-10'>3</h4>
                            <h4 className='text-margin-left-30'>3분 전</h4>

                            {scrapChecked ?
                                <AiOutlineHeart size='35' className='text-top-1 text-right scrap' onClick={handleScrapButton} /> :
                                <AiFillHeart size='35' color='red' className='text-top-1 text-right scrap' onClick={handleScrapButton} />}
                        </div>
                    </div>



                ))}
            </div>
        </div >
    );
};

export default ClothRecommend;