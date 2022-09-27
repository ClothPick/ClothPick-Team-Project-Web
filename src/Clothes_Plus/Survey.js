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
    const [detail,setDetail]=React.useState();
    const [color,setColor]=React.useState();
    const [pattern,setPattern]=React.useState();
    const [material,setMaterial]=React.useState();
    const [style,setStyle]=React.useState();



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
                    <span id='step1'>step1</span>
                    <br></br><br></br>
                    <RadioInput label="남성" value="남성" checked={gender} setter={setGender}/>
                    <RadioInput label="여성" value="여성" checked={gender} setter={setGender}/>
                </div>

                <div className='step2'>
                    <hr></hr>
                    <span id='step2'>step2</span>
                    <br></br><br></br>
                    <RadioInput label="상의" value="상의" checked={role} setter={setRole}/>
                    <RadioInput label="하의" value="하의" checked={role} setter={setRole}/>
                    <RadioInput label="신발" value="신발" checked={role} setter={setRole}/>
                    <br></br>
                    <RadioInput label="가방" value="가방" checked={role} setter={setRole}/>
                    <RadioInput label="악세사리" value="악세사리" checked={role} setter={setRole}/>
                    <RadioInput label="아우터" value="아우터" checked={role} setter={setRole}/>
                </div>

                <div className='step3'>
                    <hr></hr>
                    <span id='step3'>step3</span>
                    <br></br><br></br>
                    <span id='intro3'>세부사항</span>
                    <br></br><br></br>
                    <RadioInput label="민소매" value="민소매" checked={detail} setter={setDetail}/>
                    <RadioInput label="반팔" value="반팔" checked={detail} setter={setDetail}/>
                    <RadioInput label="5부 반팔" value="5부 반팔" checked={detail} setter={setDetail}/>
                    <RadioInput label="긴팔" value="긴팔" checked={detail} setter={setDetail}/>
                    <RadioInput label="기타" value="기타" checked={detail} setter={setDetail}/>
                </div>

                <div className='step4'>
                    <hr></hr>
                    <span id='step4'>step4</span><br></br><br></br>
                    <span id='intro4'>색상</span><br></br><br></br>
                    <RadioInput label="흰색" value="흰색" checked={color} setter={setColor}/>
                    <RadioInput label="검정" value="검정" checked={color} setter={setColor}/>
                    <RadioInput label="빨강" value="빨강" checked={color} setter={setColor}/>
                    <RadioInput label="주황" value="주황" checked={color} setter={setColor}/>
                    <RadioInput label="노랑" value="노랑" checked={color} setter={setColor}/>
                    <RadioInput label="초록" value="초록" checked={color} setter={setColor}/>
                    <RadioInput label="파랑" value="파랑" checked={color} setter={setColor}/>
                    <RadioInput label="보라" value="보라" checked={color} setter={setColor}/>
                    <RadioInput label="분홍" value="분홍" checked={color} setter={setColor}/>
                    <RadioInput label="베이지" value="베이지" checked={color} setter={setColor}/>
                    <RadioInput label="갈색" value="갈색" checked={color} setter={setColor}/>
                    <RadioInput label="회색" value="회색" checked={color} setter={setColor}/>
                </div>

                <div className='step5'>
                    <hr></hr>
                    <span id='step5'>step5</span><br></br><br></br>
                    <span id='intro5'>무늬</span><br></br><br></br>
                    <RadioInput label="무지" value="무지" checked={pattern} setter={setPattern}/>
                    <RadioInput label="그래픽" value="그래픽" checked={pattern} setter={setPattern}/>
                    <RadioInput label="레터링" value="레터링" checked={pattern} setter={setPattern}/>
                    <RadioInput label="스프라이트" value="스프라이트" checked={pattern} setter={setPattern}/>
                    <RadioInput label="플로럴" value="플로럴" checked={pattern} setter={setPattern}/>
                    <RadioInput label="체크" value="체크" checked={pattern} setter={setPattern}/>
                    <RadioInput label="기타" value="기타" checked={pattern} setter={setPattern}/>
                </div>

                <div className='step6'>
                    <hr></hr>
                    <span id='step6'>step6</span><br></br><br></br>
                    <span id='intro6'>재질</span><br></br><br></br>
                    <RadioInput label="면" value="면" checked={material} setter={setMaterial}/>
                    <RadioInput label="니트" value="니트" checked={material} setter={setMaterial}/>
                    <RadioInput label="벨벳" value="벨벳" checked={material} setter={setMaterial}/>
                    <RadioInput label="합성섬유" value="합성섬유" checked={material} setter={setMaterial}/>
                    <RadioInput label="기타" value="기타" checked={material} setter={setMaterial}/>
                </div>

                <div className='step7'>
                    <hr></hr>
                    <span id='step7'>step7</span><br></br><br></br>
                    <span id='intro7'>스타일</span><br></br><br></br>
                    <RadioInput label="캐주얼" value="캐주얼" checked={style} setter={setStyle}/>
                    <RadioInput label="러블리" value="러블리" checked={style} setter={setStyle}/>
                    <RadioInput label="하이틴" value="하이틴" checked={style} setter={setStyle}/>
                    <RadioInput label="스포티" value="스포티" checked={style} setter={setStyle}/>
                    <RadioInput label="스트릿" value="스트릿" checked={style} setter={setStyle}/>
                    <RadioInput label="기타" value="기타" checked={style} setter={setStyle}/>
                </div>

                <div className='step8'>
                    <hr></hr>
                    <span id='step8'>step8</span><br></br><br></br>
                    <span id='intro8'>옷 키워드</span><br></br><br></br>
                    <input type="text" id="keyward"></input>
                </div>

                <div className='step9'>
                    <hr></hr>
                    <span id='step9'>step9</span><br></br><br></br>
                    <span id='intro9'>선호도</span><br></br><br></br>
                    <span>1 2 3 4 5</span><br></br>
                    <progress id='pg' value="3" max="5"></progress>
                </div>

                <div className='btn'>
                    <button id='submit'>저장</button>
                    <button id='cancel'>취소</button>
                </div>
            </div>
        </form>
    )
}
export default Survey;