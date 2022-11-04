import './Scrap.css'
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ScrapComponent from './ScrapComponent';
import BoardUser from '../../../apis/Test/BoardUserMethod';

function Scrap(){
    const history = useHistory();
    const [scrap, ScrapData]=useState([]);
    const [set, setSet] = useState(false);

    useEffect(()=>{
        const get=BoardUser.Boardscraplistinfo();
        const getScrap=()=>{
            get.then(data=>{
                ScrapData(data);
                console.log(data);
            })
        }
        getScrap();
    },[set])

    const textpass = (boardType, boardId) =>{
        history.push(`/detailpage/${boardType}/${boardId}`);
    }
    return(
        <div className="Scrtotal">
             <div className="scrapHeader">
                <h2>스크랩</h2>
                <hr></hr>
             </div>
             <div className='wonscripli' >
             {scrap.map((scrap)=>(
                <div onClick={()=>textpass(scrap.boardType, scrap.boardId)}>
                    <ScrapComponent
                    key={scrap.boardId}
                    boardId={scrap.boardId}
                    boardType={scrap.boardType}
                    boardTitle={scrap.boardTitle}
                    />
                </div>

             ))}

           </div>
        </div>
);
};

export default Scrap;