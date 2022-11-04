import './Scrap.css'
import React, { useEffect, useState } from 'react';
import TestMethod from '../../../Test/TestMethod';
import {AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import ScrapComponent from './ScrapComponent';


function Scrap(){
    const [scrap,ScrapData]=useState([]);
    const [kind,setKind]=useState([]);
    const [srcChecked,setScrapChecked]=useState(true);
    const [btype,setbType]=useState([]);


    useEffect(()=>{
        const get=TestMethod.MyPageScrapListGet();

        const getScrap=()=>{
            get.then(data=>{
                ScrapData(data);
                console.log(data);

            })
        }


        getScrap();
    },[])

    return(
        <div className="Scrtotal">
             <div className="scrapHeader">
                <h2>스크랩</h2>
                <hr></hr>
             </div>
             <div className='wonscripli'>
             {scrap.map((scrap)=>(
                <ScrapComponent
                key={scrap.boardId}
                boardId={scrap.boardId}
                boardType={scrap.boardType}
                boardTitle={scrap.boardTitle}
            />
             ))}

           </div>
        </div>
);
};

export default Scrap;