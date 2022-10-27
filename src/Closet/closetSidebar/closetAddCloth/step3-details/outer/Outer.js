import React from 'react'
import '../accessory/Ac.css'
const RadioInput = ({ label, value, checked, setter }) => {
    return (
        <label>
            <input type="radio" id='choice' checked={checked == value}
                onChange={() => setter(value)} />
            <span>{label}</span>
        </label>
    )
}
function Outer(props) {
    const [detail, setDetail] = React.useState();

    return (
        <div className='ac'>
            <br></br>
            <RadioInput label="가디건" value="가디건" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="자켓" value="자켓" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="코트" value="코트" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="패딩" value="패딩" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="기타" value="기타" checked={props.detail} setter={props.setDetail} />
        </div>
    )
}
export default Outer;