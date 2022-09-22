import React from "react";
import talk from '../img/talk.png'
import './Free.css'
const Free=()=>{


    return(
        <div id="Free_total">
            <div id="Free_board">
                <div id="Free_head">
                    <img src={talk} alt="talk" id="talk"></img>
                    <span>자유 게시판</span>
                </div>
            </div>
        </div>
    )
}

export default Free();