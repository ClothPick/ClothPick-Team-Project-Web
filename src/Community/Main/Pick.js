import './Pick.css'
import { AiFillSkin, AiFillLike } from 'react-icons/ai';
import React, { useState, useEffect } from 'react'
import Axios from 'axios'


const Pick = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        Axios.get("/api/list3").then((response) => {
            setList(response.data)
        })
    }, []);

    const [rank, setrank] = useState([]);
    useEffect(() => {
        Axios.get("/api/clothesRank").then((response) => {
            setrank(response.data)
        })
    }, [])

    return (
        <div className='pick_total'>
            <div>
                <div className='pick_head2'>
                    <AiFillSkin size="70"></AiFillSkin>
                    <p>옷 추천</p>
                </div>
                <hr />
                <div className='pick_list'>
                    <table id='pick_list'>
                            {
                                list.map((data) => (
                                        <tr className='content1' key={data.id}>
                                            <td>{data.title}</td>
                                        </tr>
                                ))
                            }
                    </table>

                    <div className='choice'>
                        <table id='choice'>
                            <tbody>
                                {
                                    list.map((data) => (
                                        <tr className='content2' key={data.id}>
                                            <AiFillLike id='small_up'></AiFillLike>
                                            <td>{data.countLike}</td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className='rank'>
                <div className='rank_header'>
                    <AiFillLike id='up'></AiFillLike>
                    <span>옷 추천 수 랭킹</span>
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
                            <tbody>
                                {
                                    rank.map((data) => (
                                        <tr id='rank1' key={data.id}>
                                            <td>{data.content}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Pick;