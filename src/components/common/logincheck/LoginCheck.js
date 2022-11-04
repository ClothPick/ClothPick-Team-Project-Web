/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { login } from '../../../features/UserInfo';
import UserMethod from '../../../apis/Test/UserMethod';
// 유저 정보 요청

const dispatch = useDispatch()
const user = useSelector((state) => state.userinfo)
const [set, setSet] = useState(false)
async function userinfo() {
    if(sessionStorage.getItem("Authorization") !== null){
        const get = UserMethod.ReturnUserInfo();
        const getData = () => {
            get.then(data => {
                if(data !== null){
                    oninfoset(data);
                    console.log(data);
                    return data;
                }
            });
        };
        getData();
    }else{
        return null
    }
    console.log('df'+set)

};
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
const LoginCheck = {
    userinfo,
    oninfoset
}

export default LoginCheck;