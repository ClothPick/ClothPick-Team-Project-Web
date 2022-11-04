import './Sidebar.css'
import { IoMdArrowDropright } from "react-icons/io"
import { Link } from 'react-router-dom';


function sidebar() {
    return (
        <div className='sidebar'>
            <h4>내 옷장</h4>
            <hr></hr>

            <p>
                <Link to="/addcloth" className='deco'>

                    <span>옷 추가하기 </span>
                    <IoMdArrowDropright id='arrow'></IoMdArrowDropright>
                </Link>
            </p>
            {/* <p>
                <Link to="/addcloth" className='deco'>
                    <span>코디 추천 </span>
                    <IoMdArrowDropright id='arrow'></IoMdArrowDropright>
                </Link>
            </p> */}
        </div>
    )

}

export default sidebar;
