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
function Shoes(){
    const [detail,setDetail]=React.useState();

    return(
        <div className='Shoes'>

            <RadioInput label="슬리퍼/쪼리" value="슬리퍼/쪼리" checked={detail} setter={setDetail}/>
            <RadioInput label="샌들" value="샌들" checked={detail} setter={setDetail}/>
            <RadioInput label="플랫/로퍼" value="플랫/로퍼" checked={detail} setter={setDetail}/>
            <br></br><br></br><br></br>
            <RadioInput label="스니커즈" value="스니커즈" checked={detail} setter={setDetail}/>
            <RadioInput label="운동화" value="운동화" checked={detail} setter={setDetail}/>
            <RadioInput label="기타" value="기타" checked={detail} setter={setDetail}/>
        </div>
    )
}
export default Shoes;