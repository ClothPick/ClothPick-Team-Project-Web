import './Scrap.css'
import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';




const ScrapComponent=(props)=>{
    const [scrap,ScrapData]=useState([]);
    const [kind,setKind]=useState([]);
    const [srcChecked,setScrapChecked]=useState(true);
    const [btype,setbType]=useState([]);

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

                            <AiFillHeart size='40' color='red' className='wonclickheart'/>

                    }
                </div>
            </div>
        </div>
        </div>
    );
}
export default ScrapComponent;