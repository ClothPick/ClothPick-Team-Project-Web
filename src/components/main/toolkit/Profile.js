/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect}  from "react";
import { useSelector, useDispatch  } from 'react-redux'
import { login } from '../../../features/UserInfo';
import UserMethod from "../../../apis/Test/UserMethod";
const profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userinfo)
    const [userinfo, setUserInfo] = useState();
    const [set, setSet] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("Authorization") !== undefined){
            console.log()
            console.log("dsdsd" +sessionStorage.getItem("Authorization"))
            const get = UserMethod.ReturnUserInfo();
            const getData = () => {
                get.then(data => {
                    setUserInfo(data);
                    console.log(data);
                });
            };
            getData();
        }
        console.log('df'+set)
        // setSet(true)
    },[set])

    const oninfoset = () =>{
        dispatch(login({
            LoginState: true,
            username: userinfo.username,
            userNickName: userinfo.userNickName,
            userId: userinfo.userId,
            userDOB: userinfo.userDOB,
            userGender: userinfo.userGender,
            userRole: userinfo.userRole,
            userupdateAT: userinfo.userupdateAT
        }))
    }
    return(
        <div>
            <h1>Profile Page</h1>
            <p> LoginState : {user.LoginState ? 'ok' : 'no'}</p>
            <p> username : {user.username}</p>
            <p> userNickName : {user.userNickName}</p>
            <p> userId : {user.userId}</p>
            <p> userDOB : {user.userDOB}</p>
            <p> userGender : {user.userGender}</p>
            <p> userRole : {user.userRole}</p>
            <p> userupdateAT : {user.userupdateAT}</p>
            <button onClick={() => oninfoset()}>불러오기</button>
        </div>
    );
}
export default profile;