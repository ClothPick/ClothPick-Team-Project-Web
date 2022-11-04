import React, { useState, useEffect } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import TestMethod from "../../../../apis/Test/TestMethod";
import { Link } from 'react-router-dom';
import ConvenMethod from '../../../../apis/Test/ConvenMethod';
import "./MainPostComponent.css"


const ListBox = (props) => {
    const [scrapChecked, setScrapChecked] = useState(true);
    const [seting, setSeting] = useState(true)
    const [img, setImg] = useState([]);

    useEffect(() => {
        const getImg = TestMethod.ConnectBoardImgBoardIdList(props.boardId);
        const getImgData = () => {
            getImg.then(data => {
                setImg(data);
                console.log(data);
            })
        }
        getImgData();
    }, [seting]);

    const handleScrapButton = () => {
        scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }

    return (
        <div className='web-size'>
            <div className='second-sep'>
                <div className='border-side max-size inline-block' key={props.boardId}>
                    <Link to={`/detailpage/${props.boardType}/${props.boardId}`} className='decoration'>
                        <div className='noticeBoard'>
                            <div className='text-margin-left-10'>
                                <div>
                                    <li className='li-style_title'>{
                                    props.boardTitle.length > 20 ?
                                    props.boardTitle.substr(0, 20) + '......' : props.boardTitle}</li>
                                    <li className='li-style_content'>{
                                    props.boardContent.length > 20 ?
                                    props.boardContent.substr(0, 20) + '......' : props.boardContent}</li>
                                </div>
                            </div>
                            {
                                img.length === 0 ? console.log("no data") :
                                    <img className="preview-img" src={`http://192.168.0.101:8087/api/v1/displayimg/board/${img[0]}`} alt='' />
                            }

                        </div>
                    </Link>
                    <h4 className='text-margin-left-10'>{props.userNickname}</h4>
                    <div className='text-margin-left-10 flex text-top-2'>
                        <BiMessage size='20' className='text-top-2' />
                        <h4 className='text-margin-left-10'>{props.commentCount}</h4>
                        <h4 className='text-margin-left-30'>{ConvenMethod.handleTime(props.boardCreateAt)}</h4>

                        {/* {scrapChecked ?
                            <AiOutlineHeart size='35' className='text-top-1 text-right scrap' onClick={() => handleScrapButton()} /> :
                            <AiFillHeart size='35' color='red' className='text-top-1 text-right scrap' onClick={() => handleScrapButton()} />} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListBox;