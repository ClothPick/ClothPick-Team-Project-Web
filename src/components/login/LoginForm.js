/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import LoginMethod from '../../apis/LoginMethod';
import Visibility  from '../../assets/image/visibility.png';
import Logo  from '../../assets/image/PICK.PNG';
import UserMethod from '../../apis/Test/UserMethod';

const loginform = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
    //eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [token, setToken] = useState("")
  // eslint-disable-next-line no-useless-escape
  var regExpid = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  var regExppw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
 //eslint-disable-next-line react-hooks/rules-of-hooks
 const [emailcertification, setEmailCertification] = useState(false);
 //eslint-disable-next-line react-hooks/rules-of-hooks
 const [isRemember, setIsRemember] = useState(false);
  //eslint-disable-next-line react-hooks/rules-of-hooks

 const Onlogin = async () =>{

    setEmailCertification(true)

    if(true){
        const get = await Logininfosand(email, password);
        console.log(get);
        if(get !== undefined){
          UserMethod.ReturnUserInfo();
        }
    }else{
        if (!regExpid.test(email) && !regExppw.test(password)){alert("이메일, 비밀번호 형식 오류")}
        else if(!regExpid.test(email)){alert("이메일 형식 오류")}
        else if(!regExppw.test(password)){alert("비밀번호 형식 오류")}
    }
    console.log("이거 언제 나옴?")
    console.log(isRemember)
    history.push('/');
    location.reload();
  }

  async function Logininfosand (email, password) {
    const respone = await LoginMethod.LoginPost(email, password);
    return respone;
  }
  async function userinfo () {
    await UserMethod.ReturnUserInfo()
  }
// eslint-disable-next-line react-hooks/rules-of-hooks
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false });

//password type 변경하는 함수
  const handlePasswordType = e => {
    setPasswordType(() => {
        if (!passwordType.visible) {
            return { type: 'text', visible: true };
        }
        return { type: 'password', visible: false };
    })
    }
  return (

    <div>
      {/* <h2>시작 페이지</h2>  */}
      <div className='loginform'>
        <img src={Logo} alt='' className='loginformlogo'/>
        <h2>Login</h2>
        <div className={emailcertification ? (regExpid.test(email) ? 'emailBox' : 'emailBoxT') : 'emailBox'}>
        <input type="text"
               value = {email}
               className='loginEmail'
               onChange={({target: {value}}) => setEmail(value)}
               placeholder="ID"
        />
        </div>
          {
            emailcertification ?
            ( !regExpid.test(email)
            ? <p className='EmailCheck'>아이디 형식이 아닙니다</p>
            : <p className='EmailCheck'></p>) : <p className='EmailCheck'></p>
          }

        <div className={emailcertification ? (regExppw.test(password) ? 'passwordBox' : 'passwordBoxT') : 'passwordBox'}>
         <input type={passwordType.type}
               value = {password}
              className='loginPassword'
               onChange={({target: {value}}) => setPassword(value)}
               placeholder="pw"
          /><img src={Visibility} alt='' className='visibliltyicon' onClick={handlePasswordType}/>
        </div>
          {
            emailcertification ?
            (!regExppw.test(password)
            ? <p className='EmailCheck'>비밀번호 형식이 아닙니다</p>
            : <p className='EmailCheck'></p>) : <p className='EmailCheck'></p>
          }

        <div className='signinfo'>
          <input type="checkbox" id="cbtest" checked={isRemember} value={''}/>
          <label for="cbtest" className='idch'></label>
          <p>아이디 저장</p>
          <div className='sign'>
            <Link to="/register" className='liA'>회원가입</Link>
            <Link to="" className='liA'>아이디 찾기</Link>
            <Link to="" className='liA'>비밀번호 찾기</Link>
          </div>
        </div>
        <button
        onClick={(e) => {Onlogin()}}
        className='submit'>
          로그인
        </button>
      </div>
    </div>
  )
}

export default loginform;
