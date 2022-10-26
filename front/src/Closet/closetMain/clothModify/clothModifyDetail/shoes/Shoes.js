import React from 'react'
import '../ModifyDetail.css'

const RadioInput = ({ label, value, checked, setter }) => {
    return (
        <label>
            <input type="radio" id='mchoice' checked={checked == value}
                onChange={() => setter(value)} />
            <span>{label}</span>
        </label>
    )
}
function MShoes(props) {


    return (
        <div className='ac'>

            <RadioInput label="슬리퍼/쪼리" value="슬리퍼/쪼리" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="샌들" value="샌들" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="플랫/로퍼" value="플랫/로퍼" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="스니커즈" value="스니커즈" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="운동화" value="운동화" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="기타" value="기타" checked={props.detail} setter={props.setDetail} />
        </div>
    )
}
export default MShoes;