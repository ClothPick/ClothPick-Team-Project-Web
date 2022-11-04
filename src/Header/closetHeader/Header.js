import logo from '../../img/PICK.PNG'
import './Header.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
// import { useEffect } from 'react';
import ClosetMethod from '../../Test/ClosetMethod';
import React, { useEffect } from "react";
import { useState } from "react";
import logo2 from '../../img/loogo2.png';



function Header(props) {
    const [userinfo, setUserInfo] = useState([]);
    const [name, setName] = useState([]);
    const [useMonitor, setUseMonitor] = useState(false);

    useEffect(() => {
        const nickname = ClosetMethod.GetNickName();

        const getName = () => {
            nickname.then(data => {
                setUserInfo(data);
                setName(data.userNickName);
                // console.log(data);
                // console.log(userinfo);
            })
        }

        getName();
    }, [useMonitor])

    return (
        <div>
            <div className='header-bar'>
                <img src={logo2} alt="gkdl" id="logo222"></img>
                <span id='wonlogin'>로그아웃</span>
            </div>
            <div className='header'>
                <AiOutlineMenu size='40' className="menu" />
                <div className="item"><img src={logo} alt="logo" id="logo"></img></div>

                <div className="item">
                    <div className='icon'>
                        <MdPersonOutline size="35"></MdPersonOutline>
                    </div>

                    <div className='nn'>
                        <a id='nickname'>클로즈님, <br></br>
                            안녕하세요!</a>
                    </div>

                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default Header;