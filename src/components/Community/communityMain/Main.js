import React from "react"
import Pick from "../communityMain/communityMainBody/clothRecommend/ClothRecommend"
import Transaction from "../communityMain/communityMainBody/usedTrade/UsedTrade"
import Cfree from "./communityMainBody/freedom/Freedom"
import Communityheader from  "../../common/header/communityHeader/Header";
import './Main.css'

function Ggol() {
    return (
        <div>
            <Communityheader />
            <div className='body'>
                {/* 검색 기능 */}
                {/* <div>
                    <input type="text" id='search' />
                </div> */}
                <div className='board'>
                    <Pick />
                    <Transaction />
                    <Cfree />
                </div>
            </div>

        </div>
    )

}
export default Ggol;