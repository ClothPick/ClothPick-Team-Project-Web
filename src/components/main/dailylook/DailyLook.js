import React from "react";
import Daily01 from '../../../assets/image/daily/daily1.png'

import './DailyLook.css'
const DailyLook = () => {
    return(
        <div className="dailybox">
            <div className="imgbox">
                <img src={Daily01} alt="" className="imgblock" />
                    <div className="textbox">
                        <p className="p1">title</p>
                        <p className="p2">흑백+블러</p>
                    </div>
            </div>
        </div>
    )
}
export default DailyLook;