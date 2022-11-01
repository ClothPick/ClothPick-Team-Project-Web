import React, { useState, useEffect } from 'react';
import { BiTime, BiMessage } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillLike, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "../noticeBoardType/NoticeBoard.css"
import Header from "../../../Header/communityHeader/Header"
import TestMethod from '../../../Test/TestMethod';
import Comment from './Comment'
import ConvenMethod from '../../../Test/ConvenMethod';
import UserMethod from '../../../Test/UserMethod';
import UpdatePage from "./UpdatePage";

const DetailPage = () => {
    const [community, setCommunity] = useState([]);
    const [content, setContent] = useState('');
    const [scrapChecked, setScrapChecked] = useState(true);
    const [title, setTitle] = useState([]);
    const [userName, setUserName] = useState('');
    const [createAt, setCreateAt] = useState("");
    const [click, setClick] = useState(true);
    const [recommend, setRecommend] = useState(0);
    const [img, setImg] = useState([]);
    const [boardId, setBoardId] = useState('');
    const [boardType, setBoardType] = useState('');

    // -- login --
    const [dbUser, setDbUser] = useState([]);
    const [dbUserNickName, setDbUserNickName] = useState([]);

    let history = useHistory();

    // URL 주소값
    var url = window.location.pathname.split('/')[2];
    console.log('url : ' + window.location.pathname.split('/')[2]);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                // console.log('data : ' + data);

                // URL 주소값과 boardId의 값이 같으면 그 정보를 화면에 띄운다.
                for (var i = 0; i < data.length; i++) {
                    if (url === data[i].boardId) {
                        setTitle(data[i].boardTitle);
                        setContent(data[i].boardContent);
                        setCreateAt(ConvenMethod.handleTime(data[i].boardCreateAt));
                        setUserName(data[i].userNickname);
                        setBoardId(data[i].boardId);
                        setBoardType(data[i].boardType);

                        console.log(data[i].boardTitle);
                        console.log(data[i].boardContent);
                        console.log(data[i].boardCreateAt);
                    }
                }
            });
        };

        // 이미지 연결
        const getImg = TestMethod.ConnectBoardImgBoardIdList(url);
        const getImgData = () => {
            getImg.then(img => {
                // console.log("연결데이터", img);
                setImg(img);
                // img.push(data);
                console.log("img : " + img);
            });
        }


        // 유저 정보 조회
        const getUser = UserMethod.ReturnUserInfo();
        const getUserData = () => {
            getUser.then(data => {
                console.log(data);
                setDbUser(data);
                setDbUserNickName(data.userNickName);
                console.log(data.userNickName);
            });
        }

        getData();
        getImgData();
        getUserData();
    }, [click]);

    const handleScrapButton = () => {
        scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }

    const delBoard = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            console.log(boardId);
            let result = await TestMethod.BoardDelete(boardId);
            console.log(result);

            alert("삭제되었습니다.")
            history.goBack();
        }
        else {
            alert("취소되었습니다.")
        }
    }

    const updateBoard = () => {
        if (window.confirm("수정하시겠습니까?")) {
            <UpdatePage
                key={boardId}
                boardId={boardId}
                boardType={boardType}
                boardTitle={title}
                boardContent={content}
            />
            history.push(`/update/${boardId}`);
        }
        else {
            alert("취소되었습니다.");
        }
    }

    return (
        <div>
            <Header />
            <div className='white-space'>
                {/* 게시물 header */}
                <div className='m-l-200'>
                    {boardType === '1' ? <h2>옷 추천 게시판</h2> : null}
                    {boardType === '2' ? <h2>중고거래 게시판</h2> : null}
                    {boardType === '3' ? <h2>자유 게시판</h2> : null}
                    <h1>{title}</h1>
                    <h3>[ {userName} ]</h3>
                    <div className='flex'>
                        <BiTime size='40' className='m-t-10' />
                        <h3>{createAt}</h3>
                        <BiMessage size='40' className='m-t-10 text-margin-left-30' />
                        <h3>3</h3>
                        {/* <AiOutlineHeart size='40' className='m-t-10 text-margin-left-30' onClick={handleScrapButton} /> */}
                        {scrapChecked ?
                            <AiOutlineHeart size='35' className='text-top-1 scrap text-margin-left-20' onClick={handleScrapButton} /> :
                            <AiFillHeart size='35' color='red' className='text-top-1 scrap text-margin-left-20' onClick={handleScrapButton} />}
                        <h3>스크랩</h3>

                        {
                            dbUserNickName === userName ?
                                <div className='text-right m-r-70'>
                                    <button className='text-right m-r-20 del-btn test' onClick={() => updateBoard()}>수정</button>
                                    <button className='m-t-10 del-btn' onClick={() => delBoard()}>삭제</button>
                                </div>
                                : null
                        }
                    </div>
                </div>
                <hr className='line' />
                <div className='text-top-2 center'>
                    <h1>{content}</h1>
                    {
                        img.map((data =>
                            <div key={data}>
                                <img className='img-size' alt='' src={`http://192.168.0.101:8087/api/v1/displayimg/board/${data}`} />
                            </div>
                        ))
                    }
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
        </div >
    );
};

export default DetailPage;