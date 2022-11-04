import React, { useState, useEffect } from 'react';
import { BiTime, BiMessage } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillLike, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import "../noticeBoardType/NoticeBoard.css"
import Header from  "../../../common/header/communityHeader/Header";
import TestMethod from '../../../../apis/Test/TestMethod';
import Comment from './Comment'
import ConvenMethod from '../../../../apis/Test/ConvenMethod';
import UserMethod from '../../../../apis/Test/UserMethod';
import BoardUser from '../../../../apis/Test/BoardUserMethod';

const DetailPage = () => {
    const history = useHistory();
    const [community, setCommunity] = useState([]);
    const [content, setContent] = useState('');
    const [scrapChecked, setScrapChecked] = useState();
    const [title, setTitle] = useState([]);
    const [userName, setUserName] = useState('');
    const [createAt, setCreateAt] = useState("");
    const [click, setClick] = useState(true);

    const [img, setImg] = useState([]);

    const [recommendcount, seRecommendCount] = useState(0)
    const [recommend, setRecommend] = useState();
    const [boardId, setBoardId] = useState('');
    const [boardType, setBoardType] = useState();
    const [commentCount, setCommentCount] = useState(0);
    const [userId, setUserId] = useState(0);
    // -- login --
    const [dbUserId, setDbUserId] = useState(0);
    const [dbUserNickName, setDbUserNickName] = useState([]);
    const [userShowButton, setUserShowButton] = useState(false);

    // URL 주소값
    var url_boardId = window.location.pathname.split('/')[3];
    var url_boardType = window.location.pathname.split('/')[2];
    // console.log('url : ' + window.location.pathname.split('/')[3]);

    useEffect(() => {
        setScrapChecked(false);
        const get = TestMethod.BoardTextTypeList(url_boardType);
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                // console.log('data : ' + data);

                // URL 주소값과 boardId의 값이 같으면 그 정보를 화면에 띄운다.
                for (var i = 0; i < data.length; i++) {
                    if (url_boardId === data[i].boardId) {
                        setBoardId(data[i].boardId);
                        setTitle(data[i].boardTitle);
                        setContent(data[i].boardContent);
                        setCreateAt(ConvenMethod.handleTime(data[i].boardCreateAt));
                        setUserName(data[i].userNickname);
                        setDbUserId(data[i].userId);
                        setCommentCount(data[i].commentCount);
                        seRecommendCount(data[i].boardRecommendCount);
                        console.log(data[i])
                        // console.log(data[i].boardTitle);
                        // console.log(data[i].boardContent);
                        // console.log(data[i].boardCreateAt);
                    }
                }
                console.log(data);
            });
        };

        // 이미지 연결
        const getImg = TestMethod.ConnectBoardImgBoardIdList(url_boardId);
        const getImgData = () => {
            getImg.then(img => {
                setImg(img);
            });
        }
        const userget = UserMethod.ReturnUserInfo();
        const usergetData = () => {
            userget.then(data => {
                setUserId(data.userId);
                console.log("dadad : " + data.userId)
            });
        }
        const getrecommend = BoardUser.BoardRecommendget(url_boardId);
        const getrecommendData = () => {
            getrecommend.then(data =>{
                console.log(data);
                if(data =='possible'){
                    setRecommend(false);
                }else if(data == 'overlap'){
                    setRecommend(true);
                }else{
                    console.log('ㅈ됨');
                }
            })


        }

        const getscrap = BoardUser.Boardscraplist();
        const getscrapData = () => {
            getscrap.then(data => {
                for(let i = 0; i < data.length; i++){
                    if(data[i].boardId === url_boardId){
                        setScrapChecked(true);
                        console.log('이거는 뭔데')
                    }
                }
            })
        }


        getData();
        getImgData();
        usergetData();
        setBoardType(url_boardType);
        getrecommendData();
        getscrapData();
        // console.log('이거 돔?')
    }, [click]);

    const handleScrapButton = async() => {
        if(scrapChecked){
            const response = await BoardUser.BoardscrapDel(url_boardId)
            if(response == 'ok'){ setClick(!click);}
            else if(response == 'fail'){
                alert('서버 오류')
                setClick(!click);
            }else{
                alert('만료된 요청입니다 다시 로그인해 주세요')
                history.push('/login');
            }
        }else{
            const response = await BoardUser.BoardscrapPost(url_boardId, url_boardType)
            if(response =='ok'){ setClick(!click);}
            else if(response == 'fail'){
                alert('서버 오류')
                setClick(!click);
            }else{
                alert('회원 기능 입니다. 로그인해 주세요')
                history.push('/login');
            }

        }




    }
    const recommendpost = async() => {
        const response = await BoardUser.BoardRecommendPost(url_boardId, url_boardType)
        setClick(!click);
    }
    const updateBoard = () => {
        if (window.confirm("수정하시겠습니까?")) {
            history.push(`/updatepage/${boardType}/${boardId}`);
        }
        else {
            alert("취소되었습니다.");
        }
    }
    const delBoard = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            let result = await BoardUser.BoardTextDelete(url_boardId);
            console.log(result);

            alert("삭제되었습니다.")
            if(url_boardType == 1){
                history.replace('/recommend');
            }else if(url_boardType == 2){
                history.replace('/usedtrade');
            }else if(url_boardType == 3){
                history.replace('/freedom');
            }else{
                history.replace('/communitymain');
            }
        }
        else {
            alert("취소되었습니다.")
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
                        <h3>{commentCount}</h3>
                        {/* <AiOutlineHeart size='40' className='m-t-10 text-margin-left-30' onClick={handleScrapButton} /> */}
                        {scrapChecked ?
                            <AiFillHeart size='35' color='red' className='text-top-1 scrap text-margin-left-20' onClick={() => handleScrapButton()} />
                             :<AiOutlineHeart size='35' className='text-top-1 scrap text-margin-left-20' onClick={() => handleScrapButton()} />
                         }
                        <h3>스크랩</h3>

                        {/* {ShowButton()} */}
                        {
                            dbUserId == userId ?
                                <div className='text-right m-r-70'>
                                    <button className='text-right m-r-20 del-btn' onClick={() => updateBoard()}>수정</button>
                                    <button className='m-t-10 del-btn' onClick={() => delBoard()}>삭제</button>
                                </div>
                                : console.log("다름")
                        }

                        {/* <BsFillPencilFill size='40' className='m-t-10 m-r-200 update-btn' /> */}
                    </div>

                    {/* 게시물 contents */}
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
                    {/* <img className='img-size' alt='' src={require('../../img/cloth1.png')} /> */}
                </div>

                {/* 추천 수 */}
                <div className='center round-box flex scrap' >
                    {
                        recommend ? <AiFillLike size='60' color='red' className='m-t-10' />:
                        <AiFillLike size='60' color='white' className='m-t-10' onClick={() => recommendpost()}/>
                    }
                    <span className='text-recom'>{recommendcount}</span>
                </div>
                <hr />


                {/* 댓글 */}
                <Comment boardId = {boardId}
                        boardType = {boardType}
                            userId = {userId}
                            url = {url_boardId}
                            click = {click}
                            setClick ={setClick}/>
            </div >
        </div >
    );
};

export default DetailPage;