import './Scrap.css'
import React, { useEffect, useState } from 'react';
import {AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import TestMethod from '../../../Test/TestMethod';



const ScrapComponent=(props)=>{
    const [scrap,ScrapData]=useState([]);
    const [kind,setKind]=useState([]);
    const [srcChecked,setScrapChecked]=useState(true);
    const [btype,setbType]=useState([]);

    const ScrCheck=async()=>{
        srcChecked? setScrapChecked(false) : setScrapChecked(true)
        // console.log(props.boardId);
        // console.log(props.boardType);
        // let result=await TestMethod.ScrapDelete(props.boardId,props.boardType);
        // console.log(result);

        // alert("스크랩 해제 되었습니다.");

    }

    // useEffect(()=>{
    //     const get=TestMethod.MyPageScrapListGet();

    //     const getScrap=()=>{
    //         get.then(data=>{
    //             ScrapData(data);
    //             console.log(data);

    //         })
    //     }


    //     getScrap();
    // },[])

    return(
        <div className='wonscraplist'>
            <div className='wonscrapdetail' key={scrap.boardId}>
                <div className='won11'>
                    {
                        props.boardType==2?
                        <li id='wpp1'>[ 중고거래 ]</li>:<></>
                    }
                    {
                        props.boardType==3?
                        <li id='wpp1'>[ 자유게시판 ]</li>:<></>
                    }
                    {
                        props.boardType==1?
                        <li id='wpp1'>[ 옷 추천 ]</li>:<></>
                    }
                    <div className='sctitle'>
                        <span id='wont'>{props.boardTitle}</span>

                </div>
                <div className='wonscapicon'>
                    {

                            <AiFillHeart size='40' color='red' className='wonclickheart' onClick={ScrCheck}/>

                    }
                </div>
            </div>
        </div>
        </div>
    );
}
export default ScrapComponent;