import React from 'react';
import { Link } from 'react-router-dom'
import Modal from './ModalLeft';
import './SideModal.css'
import Close from '../../../assets/image/close.png'
import Pin from '../../../assets/image/Pin.png'
import { useState } from 'react';
// import { useEffect } from 'react';
// import styled from 'styled-components';
// import './Modal.css';

const SideModal = ({ onClose }) => {
    const [togglecheck, setToggelCheck] = useState(false)

    // const togglechecked = () => {
    //     togglecheck ? setToggelCheck(false) : setToggelCheck(true)
    // }
    return (
        <Modal onClose={onClose}>
            <div className='sidebar'>
                <div className='closebox'>
                    <img src={Close} alt='' className='closeicon' onClick={onClose}/>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#000" strokeWidth="2" d="M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"/>
                    </svg>
                </div>
                <div className='mainNav'>
                    <ul className='focusmenu'>
                        <li><p onMouseOver={()=>setToggelCheck(false)}><Link to='/login'>내 옷장</Link></p></li>
                        <li><p onMouseOver={()=>setToggelCheck(false)}>내 옷장 코디 추천</p></li>
                        <li><p onMouseOver={()=>setToggelCheck(false)}>오늘의 추천 데일리 룩</p></li>
                        <li><p onMouseOver={()=>setToggelCheck(false)}>날씨 별 코디 추천</p></li>
                        <li><p onMouseOver={()=>setToggelCheck(false)}>오늘의 행운의 컬러 코디</p></li>
                        <li><p className={togglecheck ? 'opentoggle' : 'closetoggle'} onMouseOver={()=>setToggelCheck(true)}>Pick뮤니티</p></li>
                        {
                        togglecheck ?
                        <ul className='togglemenu'>
                            <li><img src={Pin} alt='' className='pin'/><p>자유게시판</p></li>
                            <li><img src={Pin} alt='' className='pin'/><p>코디추천 게시판</p></li>
                            <li><img src={Pin} alt='' className='pin'/><p>중고거래 게시판</p></li>
                        </ul> : <span></span>
                        }

                    </ul>
                </div>
            </div>
        </Modal>
    );
}

export default SideModal;