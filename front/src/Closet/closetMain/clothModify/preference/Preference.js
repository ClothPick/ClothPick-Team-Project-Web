import React, { useState } from "react";
import styled from "styled-components";
import './Preference.css';

function Bar(props) {
    const [count, setCount] = useState(0);

    function add_count(props) {
        if (count >= 4) {
            setCount(0);

        }
        else {
            setCount(count + 1);

        }
    }

    function add(props) {
        if (count > 3) {
            props.setPro(0);
        }
    }


    const num1 = () => {


        setCount(0);
        <Progress width={(count * 1)} />


    }

    function num2() {
        setCount(1);
        <Progress width={(count)} />

    }

    function num3() {
        setCount(2);
        <Progress width={(count * 1)} />

    }

    function num4() {
        setCount(3);
        <Progress width={(count * 1)} />

    }

    function num5() {
        setCount(4);
        <Progress width={(count * 1)}
        />

    }
    return (
        <div className="prefer">
            <div className='pr'>
                <span id='a' onClick={num1} >완전 별로</span>
                <span id='b' onClick={num2} >별로</span>
                <span id='c' onClick={num3}>보통</span>
                <span id='d' onClick={num4}>좋아</span>
                <span id='e' onClick={num5}>완전 좋아</span>
            </div>

            <div className="barr">
                <Container onClick={() => { add_count(); }}>

                    <Progress width={(count / 4) * 100 + "%"} onChange={props.setPro(count)} />

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