import React, { useState, useEffect } from 'react';
import Header from '../../Header/community_header'
import './CSSClothRecommend.css'
import { AiFillSkin, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import TestMethod from "../../../Test/TestMethod";
import { Link } from 'react-router-dom';


const Freedom = () => {
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
                {community.map((data) => (
                    <div className='two-box'>
                        <Link to="/detailpage/${data.id}" className='decoration'>
                            <div className='noticeBoard '>
                                <div className='text-margin-left-10'>
                                    <tr key={data.id}>
                                        <tr><h2>{data.title}</h2></tr>

                                        <tr><h3>{data.content}</h3></tr>
                                    </tr>
                                </div>


                                <h5 className='text-margin-left-10 text-margin-top-150'>작성자</h5>
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

export default Freedom;