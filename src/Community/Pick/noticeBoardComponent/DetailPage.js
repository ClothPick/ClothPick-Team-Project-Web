import React, { useState, useEffect } from 'react';
import { BiTime, BiMessage } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillLike, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom'

import "../noticeBoardType/NoticeBoard.css"
import Header from "../../../Header/communityHeader/Header"
import TestMethod from '../../../Test/TestMethod';
import Comment from './Comment'
import ConvenMethod from '../../../Test/ConvenMethod';
import ClosetMethod from '../../../Test/ClosetMethod';

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
    const [visible,setVisible]=useState(false);
    const [scrap,setScrap]=useState([]);
    const [check,setCheck]=useState([]);
    const [scrapId,setScrapId]=useState([]);
    const [scrapBoardType,setScrapBoardType]=useState([]);
    const [boardId,setBoardId]=useState([]);
    const [boardType,setBoardType]=useState([]);

    const history = useHistory();

    // URL 주소값
    var url = window.location.pathname.split('/')[2];
    console.log('url : ' + window.location.pathname.split('/')[2]);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const scrapData=TestMethod.MyPageScrapListGet(); //스크랩리스트 조회

        const getData = () => {
            get.then(data => {
                setCommunity(data);
                console.log('data : ' + data);

                // 현재 로그인이 되어있지 않기 때문에 임의로 0번째 닉네임을 가져와서 사용한다.
                setUserName(data[0].userNickname);
                console.log('name : ' + data[0].userNickname);

                // URL 주소값과 boardId의 값이 같으면 그 정보를 화면에 띄운다.
                for (var i = 0; i < data.length; i++) {
                    if (url === data[i].boardId) {
                        setTitle(data[i].boardTitle);
                        setContent(data[i].boardContent);
                        setCreateAt(ConvenMethod.handleTime(data[i].boardCreateAt));
                        setBoardId(data[i].boardId);
                        setBoardType(data[i].boardType);



                        console.log(data[i].boardTitle);
                        console.log(data[i].boardContent);
                        console.log(data[i].boardCreateAt);
                        console.log("**********");
                        console.log(data[i].boardId);
                        console.log(data[i].boardType);
                    }
                }
            });
        };

        const getScrapData=()=>{//스크랩 리스트 가져오기
            scrapData.then(data=>{
                setScrap(data); //스크랩 리스트 저장
                console.log(data);



                for(var i=0;i<data.length;i++){
                    if(url==data[i].boardId){
                        console.log(data[i].boardId);
                        setScrapId(data[i].boardId);
                        setScrapBoardType(data[i].boardType);
                        setCheck(1);
                    }
                }
            })
        }

        const getImg = TestMethod.BoardConnectImgGet(url);
        const getImgData = () => {
            getImg.then(data => {
                setImg(data);
                console.log("img : " + data);
            });
        }

        const getName=ClosetMethod.GetNickName();
        const deleteAuthor=()=>{
            getName.then(data=>{
                console.log("userNickName:"+userName);
                if(userName===data[0].userNickname){
                    setVisible(!visible);
                }
            })
        }




        getData();
        getScrapData();
        getImgData();
        deleteAuthor();
    }, [click]);

    const handleScrapButton = () => {
        scrapChecked ? setScrapChecked(false) : setScrapChecked(true);
    }
    // console.log('첫 번째 title : ' + community[0].title);

    //스크랩 삭제
    const scrapClear=async()=>{
        console.log(boardId);
        console.log(boardType);
        let result=await TestMethod.ScrapDelete(boardId,boardType);
        console.log(result);
    }

    //스크랩 추가
    const scrapJoin=async()=>{
        // console.log(boardId);
        // console.log(boardType);
        let result=await TestMethod.ScrapInsert(boardId,boardType);
        console.log(result);
        alert("스트랩이 추가 되었습니다.")
        history.go(0);
    }

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
                        <h3>{createAt}</h3>
                        <BiMessage size='40' className='m-t-10 text-margin-left-30' />
                        <h3>3</h3>
                        {/* <AiOutlineHeart size='40' className='m-t-10 text-margin-left-30' onClick={handleScrapButton} /> */}
                        {/* {scrapChecked ?
                            <AiOutlineHeart size='35' className='text-top-1 scrap text-margin-left-20' onClick={()=>{handleScrapButton()}} /> :
                            <AiFillHeart size='35' color='red' className='text-top-1 scrap text-margin-left-20' onClick={handleScrapButton} />}
                         */}

                         {check==1?
                              <AiFillHeart size='35' color='red' className='text-top-1 scrap text-margin-left-20' onClick={()=>{scrapClear()}}/>:
                              <AiOutlineHeart size='35' className='text-top-1 scrap text-margin-left-20' onClick={()=>{scrapJoin()}} />
                        }
                        <h3>스크랩</h3>
                        <button className='text-right m-r-20 del-btn'>{visible ? "삭제":""}</button>
                        <BsFillPencilFill size='40' className='m-t-10 m-r-200 update-btn' />
                    </div>

                    {/* 게시물 contents */}
                </div>
                <hr className='line' />
                <div className='text-top-2 center'>
                    <h1>{content}</h1>
                    {img.map((data =>
                        <div key={data}>
                            <img className='img-size' alt='' src={`http://192.168.0.109:80/api/displayimg/${data}.jpg`} />
                        </div>
                    ))
                    }
                    {/* <img className='img-size' alt='' src={require('../../img/cloth1.png')} /> */}
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