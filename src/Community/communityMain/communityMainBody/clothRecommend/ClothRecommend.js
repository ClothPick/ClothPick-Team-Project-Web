import './ClothRecommend.css'
import { AiFillSkin, AiFillLike } from 'react-icons/ai';
import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import TestMethod from '../../../../Test/TestMethod';


const Pick = () => {
    const [community, setCommunity] = useState([]);
    const [boardCommunity, setBoardCommunity] = useState([]);

    const [click, setClick] = useState(true);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                console.log(data)
            });
        };

        const boardGet = TestMethod.BoardTypeRecommendRanking();
        const getBoardData = () => {
            boardGet.then(data => {
                setBoardCommunity(data);
                console.log(data);
            })
        };

        getBoardData();
        getData();
    }, [click]);

    const showTitle = () => {
        var arr = [];
        var count = 1;
        // console.log(community.length);
        for (var i = 0; i < community.length; i++) {
            // console.log("length", community.length);
            if (count < 7) { // 게시물 개수가 1~6개일 때까지만 실행
                if (community[i].boardType === '1') { // 게시판이 옷 추천 게시판일 경우
                    arr.push(
                        <div>
                            <tr className='content2'>
                                <div className='small-up'><td><AiFillLike /></td></div>
                                {/* 추천 수 추후 수정 */}
                                <td className='up-number'>{community[i].boardRecommendCount}</td>
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
        <div className='pick_total'>
            <div>
                <div className='pick_head2'>
                    <AiFillSkin size="70"></AiFillSkin>
                    <p>옷 추천</p>
                    <Link to="/recommend" className='etc'>
                        <span>더보기<RiArrowRightSLine /></span>
                    </Link>
                </div>
                <hr />
                <div className='pick_list'>
                    <table id='pick_list'>
                        {showTitle()}
                    </table>
                </div>
            </div>


            <div className='rank'>
                <div className='rank_header'>
                    <AiFillLike id='up'></AiFillLike>
                    <span>옷 추천 랭킹</span>
                    <hr id='rank_hr'></hr>
                    <div className='pick_rank'>
                        <table id='pick_rank'>
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
                        <table id='pick_rank_content'>
                            {
                                boardCommunity && boardCommunity
                                    .filter((data) => data.boardType === '1')
                                    .map((data) => (
                                        <div id="rank1" key={data.boardId}>
                                            {data.boardTitle}
                                        </div>
                                    ))
                            }
                        </table>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Pick;