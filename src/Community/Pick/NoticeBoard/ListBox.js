import React, { useState, useEffect } from 'react';
import './CSSNoticeBoard.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import TestMethod from "../../../Test/TestMethod";
import { Link } from 'react-router-dom';
import ConvenMethod from '../../../Test/ConvenMethod';


const ListBox = (props) => {

    const [scrapChecked, setScrapChecked] = useState(true);
    const [community, setCommunity] = useState([]);

    useEffect(() => {
        const get = TestMethod.BoardConnectImgGet(props.boardId);
        const getData = () => {
            get.then(data => {

                setCommunity(data)

                console.log(props.boardId)
                console.log(data)
            });
        };
        getData();
    }, []);

    const handleScrapButton = () => {
        scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }

    return (
        <div className='web-size'>
            {/* inline-block */}
            <div className='second-sep'>
                <div className='border-side max-size inline-block' key={props.boardId}>
                    <Link to={`/detailpage/${props.boardId}`} className='decoration'>
                        <div className='noticeBoard'>
                            <div className='text-margin-left-10'>
                                <div>
                                    <li className='li-style'><h2>{props.boardTitle}</h2></li>
                                    <li className='li-style'><h3>{props.boardContent}</h3></li>
                                </div>
                            </div>
                            {
                                community.length === 0 ? console.log("noda") : <img src={`http://localhost:80/api/displayimg/${community[0]}.jpg`} alt='' />
                            }

                            <h4 className='text-margin-left-10 text-margin-top-150'>{props.userName}</h4>
                        </div>
                    </Link>
                    <div className='text-margin-left-10 flex'>
                        <BiMessage size='20' className='text-top-2' />
                        <h4 className='text-margin-left-10'>3</h4>
                        <h4 className='text-margin-left-30'>{ConvenMethod.handleTime(props.createAt)}</h4>

                        {scrapChecked ?
                            <AiOutlineHeart size='35' className='text-top-1 text-right scrap' onClick={() => handleScrapButton()} /> :
                            <AiFillHeart size='35' color='red' className='text-top-1 text-right scrap' onClick={() => handleScrapButton()} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListBox;