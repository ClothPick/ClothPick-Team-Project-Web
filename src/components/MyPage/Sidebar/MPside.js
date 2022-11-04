import './MPSidebar.css'
import { IoMdArrowDropright } from "react-icons/io"
import { Link } from 'react-router-dom';

function MPside(){

    return(
        <div className="mpside">
             <h4>마이 페이지</h4>
            <hr id='mp'></hr>

            <p>
                <Link to="/mypage" className='deco'>

                    <span>내 정보 수정 </span>
                    <IoMdArrowDropright id='arrow'></IoMdArrowDropright>
                </Link>
            </p>
            <p>
                <Link to="/scrap" className='deco'>
                    <span>스크랩 </span>
                    <IoMdArrowDropright id='arrow'></IoMdArrowDropright>
                </Link>
            </p>
        </div>
    )
}
export default MPside;