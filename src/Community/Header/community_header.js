// import logo from '../img/PICK.PNG'
import './community_header.css'
import logo from '../../img/PICK.PNG'
import { MdPersonOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Community_header() {
    return (
        <>
            <div className="header">
                <div className="logo"><img src={logo} id='logo2' alt='logo'></img> </div>
                <div className='catalog'>
                    <a id='clothes' >옷 추천 </a>
                    <a id='bar'>|</a>
                    <a id="second">중고거래</a>
                    <a id='bar'>|</a>
                    <a id='free'>자유 게시판</a>
                </div>
                <div className='button'>
                    <button id='mypage'><MdPersonOutline size="50" /></button>
                    <Link to='/write'>
                        <button id='write'>글쓰기</button>
                    </Link>
                </div>
            </div>
            <hr></hr>
        </>
    )
}


export default Community_header;