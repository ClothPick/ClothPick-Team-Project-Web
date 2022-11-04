import logo from '../../img/PICK.PNG'
import './MainHeader.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
// import { useEffect } from 'react';
import React, { useEffect } from "react";
import logo2 from '../../assets/loogo2.png';

function MainHeader(props) {
    // const [userinfo,setUserInfo]=useState([]);
    // const [name,setName]=useState([]);
    // const [useMonitor, setUseMonitor] = useState(false);

    // useEffect(()=>{
    //     const nickname=ClosetMethod.GetNickName();

    //     const getName=()=>{
    //         nickname.then(data=>{
    //             setUserInfo(data);
    //             setName(data.userNickName);
    //             // console.log(data);
    //             // console.log(userinfo);
    //         })
    //     }

    //     getName();
    // },[useMonitor])

    return (
        <div>
            <div className='header-bar'>
                <img src={logo2} alt="gkdl" id="logo222"></img>
                <span id='wonlogin'>로그인</span>
            </div>
            <div className='header'>
                <div className='menu222'>
                    <AiOutlineMenu size='40' id="menu222" />
                </div>
                <div className="item"><img src={logo} alt="logo" id="logo"></img></div>



                    <div className='icon2'>
                    <MdPersonOutline size="35" id='wonperson'></MdPersonOutline>
                    </div>




                {/* <div className="item">
                    <div className='icon'>
                    <MdPersonOutline size="35"></MdPersonOutline>
                    </div>

                    <div className='nn'>
                        <a id='nickname'>{name}님, <br></br>
                        안녕하세요!</a>
                    </div>

                </div> */}
            </div>
            <hr></hr>
        </div>
    );
}

export default MainHeader;