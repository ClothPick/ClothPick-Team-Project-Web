import React from 'react'
import './Mdetail.css'
const RadioInput=({label,value,checked,setter})=>{
    return(
        <label>
            <input type="radio" id='mchoice'  checked={checked==value}
                 onChange={() => setter(value) }
                />
            <span>{label}</span>
        </label>
    )
}
const MTop=(props)=>{

    return(

        <div className='ac'>

            <br></br>
            <RadioInput label="민소매" value="민소매" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="반팔" value="반팔" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="5부 반팔" value="5부 반팔" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="긴팔" value="긴팔" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="기타" value="기타" checked={props.detail} setter={props.setDetail}/>
        </div>
    )
}
export default MTop;