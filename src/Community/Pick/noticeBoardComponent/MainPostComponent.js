import React, { useState, useEffect } from 'react';
import "../noticeBoardType/NoticeBoard.css"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import TestMethod from "../../../Test/TestMethod";
import { Link } from 'react-router-dom';
import ConvenMethod from '../../../Test/ConvenMethod';


const ListBox = (props) => {
    const [scrapChecked, setScrapChecked] = useState(true);
    const [community, setCommunity] = useState([]);
    const [img, setImg] = useState([]);

    useEffect(() => {
        const get = TestMethod.BoardConnectImgGet(props.boardType);
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                console.log(data);
            });
        };

        const getImg = TestMethod.ConnectBoardImgBoardIdList(props.boardId);
        const getImgData = () => {
            getImg.then(data => {
                setImg(data);
                console.log(img);
            })
        }
        getData();
        getImgData();
    }, []);

    const handleScrapButton = () => {
        scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }

    return (
        <div className='web-size'>
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
                                img.length === 0 ? console.log("no data") :
                                    <img className="preview-img" src={`http://192.168.0.101:8087/api/v1/displayimg/board/${img[0]}`} alt='' />
                            }

                        </div>
                    </Link>
                    <h4 className='text-margin-left-10'>{props.username}</h4>
                    <div className='text-margin-left-10 flex text-top-2'>
                        <BiMessage size='20' className='text-top-2' />
                        <h4 className='text-margin-left-10'>3</h4>
                        <h4 className='text-margin-left-30'>{ConvenMethod.handleTime(props.boardCreateAt)}</h4>

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