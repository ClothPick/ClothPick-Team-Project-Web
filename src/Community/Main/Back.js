import { AiOutlineAliwangwang } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai';


import './Back.css'

function Back() {
    return (
        <div className='free_total'>
            <div className='free'>
                <div className='free_head'>
                    <AiOutlineAliwangwang size="70px"></AiOutlineAliwangwang>
                    <span>자유 게시판</span>
                </div>
                <hr id='hr2'></hr>

                <div className='free_list'>
                    <table id='freelist'>
                        <tr>
                            <td>이게 왜 이러지?</td>
                        </tr>
                        <tr>
                            <td>이게 왜 이러지?</td>
                        </tr>
                        <tr>
                            <td>이게 왜 이러지?</td>
                        </tr>
                        <tr>
                            <td>이게 왜 이러지?</td>
                        </tr>
                        <tr>
                            <td>이게 왜 이러지?</td>
                        </tr>
                    </table>
                    <table id='good'>
                        <tr>
                            <td>.....</td>
                        </tr>
                        <tr>
                            <td>.....</td>
                        </tr>
                        <tr>
                            <td>.....</td>
                        </tr>
                        <tr>
                            <td>.....</td>
                        </tr>
                        <tr>
                            <td>.....</td>
                        </tr>
                    </table>
                </div>

            </div>
            <div className='free_rank'>
                <div className='rank_head'>
                    <AiFillLike id="up"></AiFillLike>
                    <span>자유 게시판 랭킹</span>
                    <hr></hr>
                </div>
                <div className='rank_list'>
                    <table id='number'>
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
                    <table id='content'>
                        <tr>
                            <td>집</td>
                        </tr>
                        <tr>
                            <td>집</td>
                        </tr>
                        <tr>
                            <td>집</td>
                        </tr>
                        <tr>
                            <td>집</td>
                        </tr>
                        <tr>
                            <td>집</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Back;