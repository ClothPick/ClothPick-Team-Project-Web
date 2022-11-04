import './Header2.css'
import logo from '../../img/PICK.PNG'
import { MdPersonOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';


function Community_header2() {
    return (
        <>
            {/* <div className='header-bar'></div> */}
            <div className="commu-header">
                <AiOutlineMenu size='40' className="menu" />
                <Link to="/communitymain">
                    <div className="logo"><img src={logo} id='logo2' alt='logo'></img> </div>
                </Link>
                <div className='catalog'>
                    <Link to="/recommend" className='line-none'>
                        <span>옷 추천 </span>
                    </Link>
                    <span id='bar'>|</span>

                    <Link to="/usedtrade" className='line-none'>
                        <span>중고거래</span>
                    </Link>
                    <span id='bar'>|</span>

                    <Link to="/freedom" className='line-none'>
                        <span>자유 게시판</span>
                    </Link>
                </div>
                <div className='button'>
                    <Link to='/'>
                        <button className='login'>로그인</button>
                    </Link>
                    <Link to='/write'>
                        <button className='write'>글쓰기</button>
                    </Link>
                </div>
            </div>
            <hr></hr>
        </>
    )
}


export default Community_header2;