import './Survey.css'
import React from 'react'

const RadioInput=({label,value,checked,setter})=>{
    return(
        <label>
            <input type="radio" id='choice' checked={checked==value}
                onChange={() => setter(value)}/>
            <span>{label}</span>
        </label>
    )
}
const Survey=props=>{
    const [gender,setGender]=React.useState();
    const [role,setRole] = React.useState();
    const handleSubmit=e=>{
        e.preventDefault();
        const data={gender,role};
        const json=JSON.stringify(data,null,4);
        console.clear();
        console.log(json);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="Stotal">
                <div className="step1">
                    <label>step1</label>
                    <br></br>
                    <RadioInput label="Male" value="남성" checked={gender} setter={setGender}/>
                    <RadioInput label="Female" value="여성" checked={gender} setter={setGender}/>
                </div>
                <div className='step2'>
                    <hr></hr>
                    <label>step2</label>
                    <br></br>
                    <RadioInput label="top" value="상의" checked={gender} setter={setGender}/>
                    <RadioInput label="bottom" value="하의" checked={gender} setter={setGender}/>
                    <RadioInput label="shoes" value="신발" checked={gender} setter={setGender}/>
                    <br></br>
                    <RadioInput label="bag" value="가방" checked={gender} setter={setGender}/>
                    <RadioInput label="act" value="악세사리" checked={gender} setter={setGender}/>
                    <RadioInput label="outer" value="아우터" checked={gender} setter={setGender}/>

                </div>

            </div>
        </form>
    )
}
export default Survey;