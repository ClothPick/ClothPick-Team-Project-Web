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
function Top(){
    const [detail,setDetail]=React.useState();
    const handleSubmit=e=>{
        e.preventDefault();
        const data={detail};
        const json=JSON.stringify(data,null,10);
        console.clear();
        console.log(json);
    };

    return(
        <form onSubmit={handleSubmit}>
        <div className='ac'>
            <br></br>
            <RadioInput label="민소매" value="민소매" checked={detail} setter={setDetail}/>
            <RadioInput label="반팔" value="반팔" checked={detail} setter={setDetail}/>
            <RadioInput label="5부 반팔" value="5부 반팔" checked={detail} setter={setDetail}/>
            <RadioInput label="긴팔" value="긴팔" checked={detail} setter={setDetail}/>
            <RadioInput label="기타" value="기타" checked={detail} setter={setDetail}/>
        </div>
        </form>
    )
}
export default Top;