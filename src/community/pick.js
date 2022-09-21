import './Pick.css'
import img from '../img/clothes.png'
import up from '../img/up.png'
import React,{useState,useEffect} from 'react'
import Axios from 'axios'


const Pick=()=>{
    const [list,setList]=useState([]);
    useEffect(()=>{
        Axios.get("/api/list3").then((response)=>{
            setList(response.data)
        })
    },[]);

    return(
        <div className='pick_total'>
            <div className='pick_head1'>
                <div className='pick_head2'>
                <img src={img} id='clothes' alt='clothes'></img>
                <p>옷 추천</p>
                </div>
                <hr id='hr2'></hr>
                    <div className='pick_list'>
                        <table id='pick_list'>
                            <tbody>
                            {
                                list.map((data)=>(
                                    <tr className='content1' key={data.id}>
                                        <td>{data.title}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>

                <div className='choice'>
                    <table id='choice'>
                        <tbody>
                            {
                                list.map((data)=>(
                                    <tr className='content2' key={data.id}>
                                        <img src={up} alt="up" id='small_up'></img>
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
                    <img src={up} alt="up" id='up'></img>
                    <span>옷 추천 수 랭킹</span>
                    <hr id='rank_hr'></hr>
                    <div className='pick_rank'>
                    <table id='pick_rank'>
                        <tr>
                            <td>1. 가나</td>
                        </tr>
                        <tr>
                            <td>2. 다라</td>
                        </tr>
                        <tr>
                            <td>3. 마바사</td>
                        </tr>
                        <tr>
                            <td>4. 4위</td>
                        </tr>
                        <tr>
                            <td>5. 5위</td>
                        </tr>
                    </table>
                </div>
                </div>

            </div>
        </div>


    )
}
export default Pick;