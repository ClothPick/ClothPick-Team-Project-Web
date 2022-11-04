import { Link } from 'react-router-dom'
import Modal from './ModalLeft';
import './SideModal.css'
import Close from '../../../assets/image/close.png'
import Pin from '../../../assets/image/Pin.png'
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { login } from '../../../features/UserInfo';
import { useHistory } from 'react-router-dom';
import UserMethod from '../../../apis/Test/UserMethod';
// import { useEffect } from 'react';
// import styled from 'styled-components';
// import './Modal.css';

const SideModal = ({ onClose }) => {
    const [togglecheck, setToggelCheck] = useState(false)




    const dispatch = useDispatch()
    const user = useSelector((state) => state.userinfo)
    const [set, setSet] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("Authorization") !== null){
            const get = UserMethod.ReturnUserInfo();
            const getData = () => {
                get.then(data => {
                    if(data !== null){
                        oninfoset(data);
                        console.log(data);
                    }
                });
            };
            getData();

        }
        console.log('df'+set)
        // setSet(true)
    },[set])
    const oninfoset = (data) =>{
            dispatch(login({
                LoginState: true,
                username: data.username,
                userNickName: data.userNickName,
                userId: data.userId,
                userDOB: data.userDOB,
                userGender: data.userGender,
                userRole: data.userRole,
                userupdateAT: data.userupdateAT
            }))
    }
    const history = useHistory();
    // const togglechecked = () => {
    //     togglecheck ? setToggelCheck(false) : setToggelCheck(true)
    // }


    const goToDaily = () => {
        onClose();
        history.push('/');
        window.scrollTo({ top: 800, behavior: "smooth" });
    };

    const goToWeather = () => {
        onClose();
        history.replace('/');
        window.scrollTo({ top: 1600, behavior: "smooth" });
    };
    const goToColor = () => {
        onClose();
        history.replace('/');
        window.scrollTo({ top: 2800, behavior: "smooth" });
    };
    return (
        <Modal onClose={onClose}>
            <div className='sidebar'>
                <div className='closebox'>
                    <img src={Close} alt='' className='closeicon' onClick={onClose}/>
                </div>
                <div className='mainNav'>
                    <ul className='focusmenu'>
                        <li className='sidemenu'><p onMouseOver={()=>setToggelCheck(false)}><Link to={user.LoginState ? '/test' : '/login'}>내 옷장</Link></p></li>
                        {/* <li><p onMouseOver={()=>setToggelCheck(false)}>내 옷장 코디 추천</p></li> */}
                        <li className='sidemenu'><p onMouseOver={()=>setToggelCheck(false)} onClick={() => goToDaily()}>오늘의 추천 데일리 룩</p></li>
                        <li className='sidemenu'><p onMouseOver={()=>setToggelCheck(false)} onClick={() => goToWeather()} >날씨 별 코디 추천</p></li>
                        <li className='sidemenu'><p onMouseOver={()=>setToggelCheck(false)} onClick={() => goToColor()} >오늘의 행운의 컬러 코디</p></li>
                        <li className='sidemenu'><p className={togglecheck ? 'opentoggle' : 'closetoggle'} onMouseOver={()=>setToggelCheck(true)}><Link to='/communitymain'>Pick뮤니티</Link></p></li>
                        {
                        togglecheck ?
                        <ul className='togglemenu'>
                            <li className='sidemenu'><img src={Pin} alt='' className='pin'/><p><Link to='/recommend'>옷추천</Link></p></li>
                            <li className='sidemenu'><img src={Pin} alt='' className='pin'/><p><Link to='/usedtrade'>중고거래</Link></p></li>
                            <li className='sidemenu'><img src={Pin} alt='' className='pin'/><p><Link to='/freedom'>자유게시판</Link></p></li>
                        </ul> : <span></span>
                        }

                    </ul>
                </div>
            </div>
        </Modal>
    );
}

export default SideModal;