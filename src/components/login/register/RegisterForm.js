import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';
import './RegisterForm.css';
import BoardMethod from '../../../apis/BoardMethod';
import { Login } from '@mui/icons-material';
import LoginMethod from '../../../apis/LoginMethod';
import LoadingModal from '../../common/modal/loading';
// import LoginMethod from '../../../apis/LoginMethod';
// import Visibility  from '../../../assets/image/visibility.png';
// import { Button } from '@mui/material';
// import Instance from '../../apis/LoginInstance';

const RegisterForm = () => {
  const [isOpen1, setIsOpen1] = useState(false);
    const onClickButton1 = () => {
        setIsOpen1(true);
    };
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [passwordDou, setPasswordDou] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [dob, setDOB] = useState("");
  const [sex, setSex] = useState("");
  const [emailcertificationNum, setEmailCertificationNum] = useState('');


  const codetype = 0;
  const [emailcodebtnchange, setEamilCodebtnChange] = useState(false);
  const [emailRO, setEmailRO] = useState(false);
  const [emailcertificationNumRO, setEmailCertificationNumRO] = useState(false);
  // const [passwordRO, setPasswordRO] = useState(false);
  // const [passwordDouRO, setPasswordDouRO] = useState(false);
  // const [nameRO, setNameRO] = useState(false);
  // const [idRO, setIdRO] = useState(false);
  // const [dobRO, setDOBRO] = useState(false);
  // const [sexRO, setSexRO] = useState(false);

  const [emailFormat , setEmailFormat] = useState(false);
  // const [passwordFormat, setPasswordFormat] = useState(false);
  // const [passwordDouFormat, setPasswordDouFormat] = useState(false);
  // const [nameFormat, setNameFormat] = useState(false);
  // const [idFormat, setIdFormat] = useState(false);
  // const [dobFormat, setDOBFormat] = useState(false);
  // const [sexFormat, setSexFormat] = useState(false);


  const [emailcheck, setEmailCheck] = useState(true);
  const [passwordcheck, setPasswordCheck] = useState(true);
  const [idcheck, setIdCheck] = useState(true);
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  const [timeraction, setTimerAction] = useState(false);

  var regExpname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,10}$/
  var regExpid = /^[|a-z|A-Z|0-9|]{2,10}$/

  var regExpemail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  var regExppw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/

  var regExpsex = /^[|1-4|]{1}$/

  useEffect(() => {
    if (timeraction) {
      const countdown = setInterval(() => {
        if (sec > 0) {
          setSec(sec - 1);
        }
        if (sec === 0) {
          if (min === 0) {
            alert('인증시간 초과');
            setMin(5);
            setSec(0);
            setTimerAction(false);
          } else {
            setMin(min - 1);
            setSec(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [min, sec, timeraction]);

 const test = async() => {
  var gender;
  var dobFormat
  if(sex > 2){
    dobFormat = '20'+dob.substring(0,2)+'-'+dob.substring(2,4)+'-'+dob.substring(4,6);
  }else{
    dobFormat = '19'+dob.substring(0,2)+'-'+dob.substring(2,4)+'-'+dob.substring(4,6);
  }
  if(sex % 2 === 1){
    gender = 0; //남
  }else if(sex % 2 === 0){
    gender = 1; //여
  }
  const respone = await LoginMethod.RegisterPost(id, password, email, name, gender, dobFormat, emailcertificationNum)

  if(respone === 'ok'){
    alert('회원가입 성공');
    history.push('/login');
  }else if(respone === 'fail'){
    alert('서버 오류 입니다. 다시 시도해 주세요')
  }else{
    alert('알수 없는 오류')
  }
 }

 const EmailChecktest = () => {
  if(regExpemail.test(email)){
    setEmailCheck(true);
    console.log('out :'+emailcheck)
  }else{
    setEmailCheck(false);
    console.log(emailcheck)
  }
 }

 const nameCheck = async() => {
  if(regExpname.test(name)){
    const respone = await LoginMethod.NickNameCheckPost(name);
    if(respone === 'ok'){
      alert("사용가능");
    }else if(respone === 'fail'){
      alert("중복임");
    }else{
      alert("에러임")
    }
  }else{
    alert("형식 에러")
  }
 }

 const idchecked = async() => {
  if(regExpid.test(id)){
    const respone = await LoginMethod.IdCheckPost(id);
    if(respone === 'ok'){
      alert("사용가능");
    }else if(respone === 'fail'){
      alert("중복임");
    }else{
      alert("에러임")
    }
  }else{
    alert("형식 에러")
  }
 }
const emaailCheck = async() => {
  if(regExpemail.test(email)){
    const respone = await LoginMethod.EmailCheckPost(email);
    if(respone === 'ok'){
      if (window.confirm("중복 확인 완료 사용 할까요?")) {
        setEmailRO(true);
      }
    }else if(respone === 'fail'){
      alert("중복임");
    }else{
      alert("에러임");
    }
  }else{
    alert("형식 에러")
  }
}
const codeSand = async() => {
  if(regExpemail.test(email)){
    onClickButton1();
    const respone = await LoginMethod.CodeSendPost(email, codetype);

    if(respone === 'ok'){
      alert("메일로 코드를 보냈습니다.");
      setTimerAction(true);
      setEamilCodebtnChange(true);
      setIsOpen1(false);
    }else if(respone === 'fail'){
      alert("서버 에러입니다 다시 시도해 주세요");
    }else{
      alert("에러임");
    }
  }else{
    alert("email 형식 체크")
  }
}
const codeCheck = async() => {
    const respone = await LoginMethod.CodeCheckPost(email, codetype, emailcertificationNum);
    if(respone === 'ok'){
      alert("인증 완료");
      setEmailFormat(true);
      setEmailCertificationNumRO(true);
      setTimerAction(false);
    }else if(respone === 'wrong code'){
      alert("코드가 달라용");
    }else{
      alert("에러임");
  }
}





 const PasswordChecktest = () => {
  if(regExppw.test(password)){
    setPasswordCheck(true);
    if(password !== passwordDou){
      setPasswordCheck(false);
    }
  }else{
    setPasswordCheck(false);
  }
 }
  return (
    <div>
      {/* <h2>시작 페이지</h2>  */}
      <div className='RegisterForm_Component'>
        <h2 className='RegisterForm_Title'>Register</h2>
        <ul className='RegisterForm_RegisterInfo'>
          <li className='RegisterForm_RegisterInfoLine'>
            <p className='RegisterForm_TextBox'>이름</p>
            <input type='text' value={name} className='RegisterForm_InputBox'
              onChange={({target: {value}}) => setName(value)}  placeholder="특수문자 제외 2~10"/>
            <button className='RegisterForm_Button' onClick={(e) => nameCheck()}>중복체크</button>
          </li>

          <li className='RegisterForm_RegisterInfoLine'>
            <p className='RegisterForm_TextBox'>아이디</p>
            <input type='text' value={id} className={idcheck ? 'RegisterForm_InputBox' : 'RegisterForm_InputBox_RED'}
              onChange={({target: {value}}) => setId(value)} placeholder="특수문자/한글 제외 2~10"/>
            <button className='RegisterForm_Button' onClick={(e) => idchecked()}>중복체크</button>
          </li>
          <li className='RegisterForm_RegisterInfoLine'>
            <p className='RegisterForm_TextBox'>이메일</p>
            <input type='text' value={email} className={emailcheck ? 'RegisterForm_InputBox' : 'RegisterForm_InputBox_RED'}
              onChange={({target: {value}}) => setEmail(value)} onBlur={() => EmailChecktest()} readOnly={emailRO} placeholder="Email"/>
            <button className='RegisterForm_Button' onClick={(e) => emaailCheck()}>중복체크</button>
            {
            emailcheck ? <p className='emailChecktext'></p> :
            ( regExpemail.test(email)
            ? <p className='RegisterForm_TextBoxRED'></p>
            : <p className='RegisterForm_TextBoxRED'>이메일 형식이 아닙니다</p>)
          }
          </li>
          <li className='RegisterForm_RegisterInfoLine'>
            <p className='RegisterForm_TextBox'>이메일 인증</p>
            <input type='text' value={emailcertificationNum} className='RegisterForm_CODEInputBox'
              onChange={({target: {value}}) => setEmailCertificationNum(value)} placeholder="Code" maxLength='8' readOnly={emailcertificationNumRO}/>
            <label className='RegisterForm_LabelBox'>
              {min} : {sec < 10 ?  '0'+sec : sec}</label>
            {
              emailcodebtnchange ? <button className='RegisterForm_Button' disabled={emailFormat} onClick={(e) => codeCheck()}>인증확인</button> :
              <button className={emailRO ? 'RegisterForm_Button' : 'RegisterForm_Button_Disable'} disabled={!emailRO} onClick={(e) => codeSand()}>인증요청</button>
            }
            {
              isOpen1 ? <LoadingModal/> : null
            }
          </li>
          <li className='RegisterForm_RegisterInfoLine'>
            <p className='RegisterForm_TextBox'>생년월일</p>
            <input type='text' value={dob} className='RegisterForm_CODEInputBox'
              onChange={({target: {value}}) => setDOB(value)} placeholder="220101" maxLength='6'/>
            <p className='RegisterForm_CrossIcon'> - </p>
            <input type='text' value={sex} className='RegisterForm_SEXInputBox'
              onChange={({target: {value}}) => setSex(value)} placeholder="0" maxLength='1'/>
            <p className='RegisterForm_StarIcon'> ****** </p>
          </li>
          <li className='RegisterForm_RegisterInfoLine'>
            <p className='RegisterForm_TextBox'>비밀번호</p>
            <input type='password' value={password} className={passwordcheck ? 'RegisterForm_InputBox' : 'RegisterForm_InputBox_RED'}
              placeholder="영문/숫자/특수기호 포함 8자리 이상" onChange={({target: {value}}) => setPassword(value)}/>
            {
            passwordcheck ? <p className='passwordChecktext'></p> :
            ( regExpemail.test(password)
            ? <p className='RegisterForm_TextBoxRED'></p>
            : <p className='RegisterForm_TextBoxRED'>비밀번호 형식이 아닙니다</p> )
          }
          </li>
          <li className='RegisterForm_RegisterInfoLine'>
            <p className='RegisterForm_TextBox'>비밀번호 확인</p>
            <input type='password' value={passwordDou} className='RegisterForm_InputBox'
             placeholder="영문/숫자/특수기호 포함 8자리 이상" onChange={({target: {value}}) => setPasswordDou(value)} onBlur={()=>PasswordChecktest()}/>

            {
            passwordcheck ? <p className='passwordarticleChecktext'></p> :
            ( password === passwordDou
            ? <p className='RegisterForm_TextBoxRED'></p>
            : <p className='RegisterForm_TextBoxRED'>비밀번호가 다릅니다</p> )
          }
          </li>
          <li className='RegisterForm_RegisterInfoLine'>
            <button className='RegisterForm_RegisterSubmit' onClick={(e) => {test()}}>회원가입</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RegisterForm;
