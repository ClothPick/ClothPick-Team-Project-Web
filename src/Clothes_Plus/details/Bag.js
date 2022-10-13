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
function Bag(){
    const [detail,setDetail]=React.useState();

    return(
        <div className='Shoes'>
            <RadioInput label="크로스백" value="크로스백" checked={detail} setter={setDetail}/>
            <RadioInput label="숄더백" value="숄더백" checked={detail} setter={setDetail}/>
            <RadioInput label="에코백" value="에코백" checked={detail} setter={setDetail}/>
            <br></br><br></br><br></br>
            <RadioInput label="클러치" value="클러치" checked={detail} setter={setDetail}/>
            <RadioInput label="백팩" value="백팩" checked={detail} setter={setDetail}/>
            <RadioInput label="기타" value="기타" checked={detail} setter={setDetail}/>
        </div>
    )
}
export default Bag;