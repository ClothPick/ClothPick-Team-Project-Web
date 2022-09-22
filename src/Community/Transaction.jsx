import './Transaction.css';
import up from '../img/up.png'
import hand from '../img/hand.png'
import React,{useState,useEffect} from 'react'
import Axios from 'axios'

const Transaction=()=>{
    const [list,setList]=useState([]);
    useEffect (()=>{

    },[])
    return(
        <div className="trans_title">
            <div className="trans_list">
                <div className="list_head">
                    <img src={hand} alt="hand" id="hand"></img>
                    <span>중고거래</span>
                </div>
                <hr id="hr2"></hr>
                <div className="listt">
                    <table id="trans_list">
                        <tbody>
                            <tr>
                                <td>가나다라다</td>
                            </tr>
                            <tr>
                                <td>가나다라다</td>
                            </tr>
                            <tr>
                                <td>가나다라다</td>
                            </tr>
                            <tr>
                                <td>가나다라다</td>
                            </tr>
                            <tr>
                                <td>가나다라다</td>
                            </tr>
                        </tbody>
                    </table>

                        <table id="up_count">
                            <tr>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>...</td>
                            </tr>
                        </table>
                </div>
            </div>
            <div className="trans_rank">
                <div className="rank_header">
                    <img src={up} alt="up" id="up"></img>
                    <span>중고거래 랭킹</span>
                    <hr></hr>
                </div>
                <div className="rank_list">
                    <table id="number">
                        <tr>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                        </tr>
                    </table>

                    <table id="content">
                    <tr>
                            <td>하이</td>
                        </tr>
                        <tr>
                            <td>ㅎㅎ</td>
                        </tr>
                        <tr>
                            <td>띠롱</td>
                        </tr>
                        <tr>
                            <td>ㅎㅎ</td>
                        </tr>
                        <tr>
                            <td>ㅋㅋ</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Transaction;