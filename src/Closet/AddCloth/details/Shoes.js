import React from 'react'
import './Shoes.css'
const RadioInput=({label,value,checked,setter})=>{
    return(
        <label>
            <input type="radio" id='choice'  checked={checked==value}
                onChange={() => setter(value)}/>
            <span>{label}</span>
        </label>
    )
}
function Shoes(props){


    return(
        <div className='Shoes'>

            <RadioInput label="슬리퍼/쪼리" value="슬리퍼/쪼리" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="샌들" value="샌들" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="플랫/로퍼" value="플랫/로퍼" checked={props.detail} setter={props.setDetail}/>
            <br></br><br></br><br></br>
            <RadioInput label="스니커즈" value="스니커즈" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="운동화" value="운동화" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="기타" value="기타" checked={props.detail} setter={props.setDetail}/>
        </div>
    )
}
export default Shoes;