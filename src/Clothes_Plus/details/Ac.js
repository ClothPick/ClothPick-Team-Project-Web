import React from 'react'
import './Ac.css'
const RadioInput=({label,value,checked,setter})=>{
    return(
        <label>
            <input type="radio" id='choice'  checked={checked==value}
                onChange={() => setter(value)}/>
            <span>{label}</span>
        </label>
    )
}
function Ac(){
    const [detail,setDetail]=React.useState();

    return(
        <div className='ac'>
            <br></br>
            <RadioInput label="반지" value="반지" checked={detail} setter={setDetail}/>
            <RadioInput label="귀걸이" value="귀걸이" checked={detail} setter={setDetail}/>
            <RadioInput label="목걸이" value="목걸이" checked={detail} setter={setDetail}/>
            <RadioInput label="팔찌" value="팔찌" checked={detail} setter={setDetail}/>
            <RadioInput label="기타" value="기타" checked={detail} setter={setDetail}/>
        </div>
    )
}
export default Ac;