import React from "react"
import Pick from "../communityMain/communityMainBody/clothRecommend/ClothRecommend"
import Transaction from "../communityMain/communityMainBody/usedTrade/UsedTrade"
import Cfree from "./communityMainBody/freedom/Freedom"
import Community_header from "../../Header/communityHeader/Header"
import './Main.css'

function Ggol() {
    return (
        <div>
            <Community_header />
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