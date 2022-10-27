import React from 'react'
import './Bottom.css'
const RadioInput=({label,value,checked,setter})=>{
    return(
        <label>
            <input type="radio" id='choice'  checked={checked==value}
                onChange={() => setter(value)}/>
            <span>{label}</span>
        </label>
    )
}
function Bottom(props){
    // const [detail,setDetail]=React.useState();

    return(
        <div className='bottom'>
            <RadioInput label="숏팬츠" value="숏팬츠" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="롱팬츠" value="롱팬츠" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="미니스커트" value="미니스커트" checked={props.detail} setter={props.setDetail}/>
            <br></br><br></br><br></br>
            <RadioInput label="롱스커트" value="롱스커트" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="원피스/세트" value="원피스/세트" checked={props.detail} setter={props.setDetail}/>
            <RadioInput label="기타" value="기타" checked={props.detail} setter={props.setDetail}/>
        </div>
    )
}
export default Bottom;