/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import logo from '../../../../assets/image/PICK.PNG'
import './Header.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { login } from '../../../../features/UserInfo';
import { useHistory } from 'react-router-dom';
import UserMethod from '../../../../apis/Test/UserMethod';
import SideBar from '../../sidebar/SideModal'
import LoadingModal from '../../modal/loading';
function header() {
    const [isOpen1, setIsOpen1] = useState(false);
    const onClickButton1 = () => {
        setIsOpen1(true);
    };


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
    const Mypage = () => {
        console.log(user.LoginState);
        if(user.LoginState){
            history.push('/mypage');
            // location.reload();
        }else{
            history.push('/login')
            // location.reload();
        }
    }
    const logout = () => {
        sessionStorage.setItem("Authorization", null)
        location.reload();
    }
    return (
        <div>
            <div className='header-bar'></div>
            <div className='header'>
                <AiOutlineMenu size='40' className="menu"  onClick={()=>onClickButton1()} />
                {/* {isOpen1 && (
                <LoadingModal
                onClose={() => {
                setIsOpen1(false)
                }}/>)} */}


                {isOpen1 && (
                <SideBar
                    onClose={() => {
                        setIsOpen1(false);
                }}
                />)}
                <div className="item"><img src={logo} alt="logo" id="logo"></img></div>

                <div className="item_user">
                    {/* <MdPersonOutline size="35" onClick={() => Mypage()}></MdPersonOutline> */}
                    {
                        user.LoginState ? <button className='custom-btn btn-16' onClick={()=> logout()}>로그아웃</button>
                        : <button  className='custom-btn btn-16' onClick={() => history.push('/login')}>로그인</button>
                    }
                    <MdPersonOutline size="35" onClick={() => Mypage()}></MdPersonOutline>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default header;