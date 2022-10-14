// import logo from '../img/PICK.PNG'
import './community_header.css'
import logo from '../../img/PICK.PNG'
import { MdPersonOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Community_header() {
    return (
        <>
            <div className='header-bar'></div>
            <div className="commu-header">
                <Link to="/community">
                    <div className="logo"><img src={logo} id='logo2' alt='logo'></img> </div>
                </Link>
                <div className='catalog'>
                    <span>옷 추천 </span>
                    <span id='bar'>|</span>
                    <span>중고거래</span>
                    <span id='bar'>|</span>
                    <span>자유 게시판</span>
                </div>
                <div className='button'>
                    <button className='mypage'><MdPersonOutline size="50" /></button>
                    <Link to='/write'>
                        <button className='write'>글쓰기</button>
                    </Link>
                </div>
            </div>
            <hr></hr>
        </>
    )
}


export default Community_header;