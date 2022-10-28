import React, { useState, useEffect} from "react";
import styled from "styled-components";
import './Preference.css';
import ClosetMethod from "../../../../Test/ClosetMethod";


const Bar = (props)=> {
    // const [count,setCount]=useState(0);
    const [dbPref,setDbPref]=useState(0);

    // function setPro(props){
    //     setCount({props.dbPref})
    // }

    useEffect(()=>{
        const Data=()=>{
            setDbPref(props.dbPref);
            console.log("dbPref", props.dbPref);
        }
        Data();
        // num1();
        // num2();
        // num3();
        // num4();
        // num5();
    },[])

    const abc = () =>{
        console.log("dbPref", dbPref);
        // console.log(pp);
    }

    function add_count() {
        if (dbPref >= 4) {
            setDbPref(0);

        }
        else {
            setDbPref(dbPref + 1);

        }
    }

    // function set(){
    //     setCount(pp);
    // }



    const num1 = (props) => {
        setDbPref(0);
        <Progress width={(dbPref * 1)} />
    }

    function num2() {
        setDbPref(1);
        <Progress width={(dbPref*1)} />

    }

    function num3() {
        setDbPref(2);
        <Progress width={(dbPref * 1)} />

    }

    function num4() {
        setDbPref(3);
        <Progress width={(dbPref * 1)} />

    }

    function num5() {
        setDbPref(4);
        <Progress width={(dbPref * 1)}
        />
    }


    return (
        <div className="prefer">
            {/* <button onClick={() => }>dasdas</button> */}
            <div className='pr'>
                <span id='a' onClick={num1} >완전 별로</span>
                <span id='b' onClick={num2} >별로</span>
                <span id='c' onClick={num3}>보통</span>
                <span id='d' onClick={num4}>좋아</span>
                <span id='e' onClick={num5}>완전 좋아</span>
            </div>

            <div className="barr">
                <Container onClick={() => { add_count(); abc();}} onChange={()=>{}}>

                    <Progress width={(dbPref / 4) * 100 + "%"} onChange={()=>{   }} />

                    <Dot />
                </Container>
            </div>
        </div>
        )
    }

export default Bar;

const Container = styled.div`
margin-top:50px;
margin-left:160px;
background-color: #eee;
width: 640px;
height: 40px;
display: flex;
align-items: center;
border-radius: 20px;

`;
const Progress = styled.div`
background-color:#E8E7D2;
width: ${props => props.width};
height: 100%;
transition: width 1s;
border-radius: 20px;
`;
//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  border: 10px solid #BDC2BB;
  border-radius: 35px;
  background: #BDC2BB;;
  margin-left: -35px;
  `