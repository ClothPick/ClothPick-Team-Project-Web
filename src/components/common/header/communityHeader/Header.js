/* eslint-disable no-restricted-globals */
// import logo from '../img/PICK.PNG'
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { login } from '../../../../features/UserInfo';
import './Header.css'
import logo from '../../../../assets/image/PICK.PNG'
import { MdPersonOutline } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import UserMethod from '../../../../apis/Test/UserMethod';
import SideBar from '../../sidebar/SideModal'
function Community_header() {
    const [isOpen1, setIsOpen1] = useState(false);
    const onClickButton1 = () => {
        setIsOpen1(true);
    };

    const history = useHistory();
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

    const onWrite = () => {
        if(user.LoginState){
            history.push('/write');
            // location.reload();
        }else{
            alert('로그인이 필요합니다')
            history.push('/login');
            // location.reload();
        }
    }
    const abc = () => {
        history.push('/mypage')
    }
    return (
        <>
            <div className='header-bar'></div>
            <div className="commu-header">
                <AiOutlineMenu size='40' className="menu" onClick={()=>onClickButton1()}  />
                {isOpen1 && (
                <SideBar
                    onClose={() => {
                        setIsOpen1(false);
                }}
                />)}
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
                    <button className='mypage' onClick={()=>abc()}><MdPersonOutline size="30" /></button>
                    <button className='write' onClick={() => onWrite()}>글쓰기</button>
                </div>
            </div>
            <hr></hr>
        </>
    )
}


export default Community_header;