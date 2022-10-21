import { useState, useEffect } from 'react';
import TestMethod from '../../Test/TestMethod';
import './Transaction.css';
// import { AiFillSkin } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai';
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


import React from 'react'

const Transaction = () => {
    const [community, setCommunity] = useState([]);
    const [click, setClick] = useState(true);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                console.log(data)
            });
        };
        getData();
    }, [click]);

    const showTitle = () => {
        var arr = [];
        var count = 1;
        for (var i = 0; i < community.length; i++) {
            if (count < 7) { // 게시물 개수가 1~6개일 때까지만 실행
                if (community[i].boardType === '2') { // 게시판이 중고거래 게시판일 경우
                    arr.push(
                        <div>
                            <tr className='content2'>
                                <div className='small-up'><td><AiFillLike /></td></div>
                                {/* 추천 수 추후 수정 */}
                                <td className='up-number'>0</td>
                                {community[i].boardTitle}
                            </tr>
                        </div>
                    )
                    count++; // 게시물이 +1개 추가되었다.
                }
            }
        }
        return arr;
    }

    return (
        <div className="trans_title">
            <div className="trans_list">
                <div className="list_head">
                    <FaRegHandshake size="70" id="hand"></FaRegHandshake>
                    <span>중고거래</span>
                    <Link to="/usedtrade" className="etc">
                        <p>더보기<RiArrowRightSLine /></p>
                    </Link>

                </div>
                <hr />
                <div className='pick_list'>
                    <table id='trans_list'>
                        {showTitle()}
                    </table>
                </div>
            </div>

            <div className="trans_rank">
                <div className="rank_header">
                    <AiFillLike id="up"></AiFillLike>
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