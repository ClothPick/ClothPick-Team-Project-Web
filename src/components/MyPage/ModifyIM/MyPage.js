import './MyPage.css'
import {IoMdPerson} from 'react-icons/io'
import { useEffect, useState } from 'react';
import UserMethod from '../../../apis/Test/UserMethod';
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom';
function MyPage(){
    const history = useHistory();
    const [userdata,setUserData]=useState([]);
    const [userNick,setUserNick]=useState([]);
    const [useId,setUseId]=useState([]);
    const [useGender,setUseGender]=useState([]);
    const [usebirth,setUseBirth]=useState([]);
    const [usepass,setUsePass]=useState([]);
    const [set, Setset] = useState(false)
    const user = useSelector((state) => state.userinfo);

    useEffect(()=>{
        const getUserData=UserMethod.ReturnUserInfo();
        // if(!user.LoginState){
        //     alert('회원 서비스 입니다.');
        //     history.push('/login');
        // }

    },[set]);

    const resetpass=async()=>{
        // let result=await ClosetMethod.ResetPassword(usepass);
        // console.log(result);

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
                    <span id='name'>{user.userNickName}님,</span>
                    <br></br>
                    <span id='name'>반갑습니다</span>
                </div>
            </div>
            <div className='wonlistto'>

                <div className='list1'>
                    <span id='pp'>아이디 <span> :</span></span>
                    <span id='wopp'>{user.username}</span>

                </div>
                <div className='list1'>
                    <span id='pp'>비밀번호</span>
                    <input type="text" id="text11" onChange={onChange} value={usepass}/>
                </div>

                <div className='list1'>
                    <span id='pp'>닉네임 <span> :</span></span>
                    <span id='wopp'>{user.userNickName}</span>
                </div>

                <div className='list1'>
                    <span id='pp'>성별 <span> :</span></span>
                    {
                        user.userGender==0?
                        <span id='wopp'>남자</span>:<span id='wopp'></span>
                    }
                    {
                        user.userGender==1?
                        <span id='wopp'>여자</span>:<span id='wopp'></span>
                    }

                </div>

                <div className='list1'>
                    <span id='pp'>생년월일 <span> :</span></span>
                    <span id='wopp'>{user.userDOB}</span>
                </div>

                <div className='btnsubmit'>
                    <button id='btnsubmit' onClick={resetpass} >변경</button>
                </div>
            </div>



        </div>
    )
}
export default MyPage;