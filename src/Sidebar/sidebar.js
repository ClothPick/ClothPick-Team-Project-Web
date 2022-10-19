import './sidebar.css'
import Arrow from '../img/arrow.png'
import { IoMdArrowDropright } from "react-icons/io"

function sidebar() {
    return (
        <div className='sidebar'>
            <h4>내 옷장</h4>
            <hr></hr>
            <p>
                <span>옷 추가하기 </span>
                <IoMdArrowDropright id='arrow'></IoMdArrowDropright>
            </p>
            <p>
                <span>코디 추천 </span>
                <IoMdArrowDropright id='arrow'></IoMdArrowDropright>
            </p>
        </div>
    )

}

export default sidebar;
