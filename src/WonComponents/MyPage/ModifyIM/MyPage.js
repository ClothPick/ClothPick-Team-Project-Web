import './MyPage.css'
import {IoMdPerson} from 'react-icons/io'
import { useEffect, useState } from 'react';
import ClosetMethod from '../../../Test/ClosetMethod';
function MyPage(){
    const [userdata,setUserData]=useState([]);
    const [userNick,setUserNick]=useState([]);
    const [useId,setUseId]=useState([]);
    const [useGender,setUseGender]=useState([]);
    const [usebirth,setUseBirth]=useState([]);
    const [usepass,setUsePass]=useState([]);

    useEffect(()=>{
        const getUserData=ClosetMethod.GetNickName();
        const getUser=()=>{
            getUserData.then(data=>{
                setUserData(data);
                console.log(data);
                setUserNick(data.userNickName);
                setUseId(data.username);
                setUseGender(data.userGender);
                setUseBirth(data.userDOB);

            })
        };
        getUser();
    },[]);

    const resetpass=async()=>{
        let result=await ClosetMethod.ResetPassword(usepass);
        console.log(result);

        alert("변경되었습니다.")
    }

    const onChange=(e)=>{
        setUsePass(e.target.value)
        console.log(e.target.value);
    }

    return(
        <div className="MPageTotal">
            <div className="MPPageHeader">
                <h2>비밀번호 수정</h2>
                <hr></hr>
            </div>
            <div className='imformation'>
                <IoMdPerson id="person" size="80" color="white"></IoMdPerson>
                <div className='im_detail'>
                    <span id='name'>{userNick}님,</span>
                    <br></br>
                    <span id='name'>반갑습니다</span>
                </div>
            </div>
            <div className='wonlistto'>

                <div className='list1'>
                    <span id='pp'>아이디 <span> :</span></span>
                    <span id='wopp'>{useId}</span>

                </div>
                <div className='list1'>
                    <span id='pp'>비밀번호</span>
                    <input type="text" id="text11" onChange={onChange} value={usepass}/>
                </div>

                <div className='list1'>
                    <span id='pp'>닉네임 <span> :</span></span>
                    <span id='wopp'>{userNick}</span>
                </div>

                <div className='list1'>
                    <span id='pp'>성별 <span> :</span></span>
                    {
                        useGender==0?
                        <span id='wopp'>남자</span>:<span id='wopp'></span>
                    }
                    {
                        useGender==1?
                        <span id='wopp'>여자</span>:<span id='wopp'></span>
                    }

                </div>

                <div className='list1'>
                    <span id='pp'>생년월일 <span> :</span></span>
                    <span id='wopp'>{usebirth}</span>
                </div>

                <div className='btnsubmit'>
                    <button id='btnsubmit' onClick={resetpass} >변경</button>
                </div>
            </div>



        </div>
    )
}
export default MyPage;