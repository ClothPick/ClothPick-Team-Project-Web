import React, {useState} from 'react';
import Logo from '../../../assets/image/PICK.PNG'
import './Header.css';
import Menubar from '../../../assets/image/menubar.png'
import Human from '../../../assets/image/human.png'
import Alarm from '../../../assets/image/Alarm.png'
import SideBar from '../sidebar/SideModal'

function Header(){
    const [isOpen1, setIsOpen1] = useState(false);


    const onClickButton1 = () => {
        setIsOpen1(true);
    };

    return(
        <div>
        <div className ='header'>
        <div className ="itemL"><img src={Menubar} className='menubar' alt='' onClick={()=>onClickButton1()}></img></div>
        {isOpen1 && (
                <SideBar
                    onClose={() => {
                        setIsOpen1(false);
                }}
            />)}
        <div className="itemC"><img src={Logo} alt="logo" id="logo"></img></div>

        <div className="itemR">
            <p>로그인</p>
            <p>회원가입</p>
            <img src={Alarm} alt="logo" id="alarm"></img>
            <img src={Human} alt="logo" id="human"></img>
        </div>
        </div>
        </div>
    );
}
export default Header;
