import './Survey.css'
import React, { useState }  from 'react'
import Picture from './Picture'
import Check from './Checkbox'
import Top from './details/Top'
import Bottom from './details/Bottom'
import Blank from './details/Blank'
import Shoes from './details/Shoes'
import Bag from './details/Bag'
import Ac from './details/Ac'
import Outer from './details/Outer'
import Bar from './Progressbar/Bar'

const RadioInput=({label,value,checked,setter})=>{
    return(
        <label>
            <input type="radio" id='choice'  checked={checked==value}
                onChange={() => setter(value)}/>
            <span>{label}</span>
        </label>
    )
}
const Survey=(props)=>{
    const [picture,setPicture]=React.useState();
    const [gender,setGender]=React.useState();
    const [kind,setKind] = React.useState("");
    const[detail,setDetail]=useState();
    const [color,setColor]=React.useState([]);
    const [pattern,setPattern]=React.useState();
    const [material,setMaterial]=React.useState();
    const [style,setStyle]=React.useState();
    const [keyward,setKeyward]=React.useState("");
    const [pro,setPro]=React.useState(0);

    const [top,Showtop]=useState(false);
    const [bottom,Showbottom]=useState(false);
    const [shoes,Showshoes]=useState(false);
    const [bag,Showbag]=useState(false);
    const [outer,Showouter]=useState(false);
    const [ac, Showac]=useState(false);

    const handleSubmit=e=>{
        e.preventDefault();
        const data={picture,gender,kind,detail,color,pattern,material,style,keyward,pro};
        const json=JSON.stringify(data,null,10);

        // console.clear();
        console.log(json);
    };

    var val;

    const onChange=(e)=>{
        setKeyward(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="Stotal">
                <Picture setPicture={setPicture} picture={picture} />
                <div className="step1">
                    <span id='step1'>step1</span>
                    <br></br><br></br>
                    <RadioInput label="남성" value="남성" checked={gender} setter={setGender}/>
                    <RadioInput label="여성" value="여성" checked={gender} setter={setGender}/>

                </div>

                <div className='step2'>
                    <hr></hr>
                    <span id='step2'>step2</span>
                    <br></br><br></br><br></br>
                    <div className='choice2'>
                    <div className='detail'>
                    <label id="top">
                        <input type="radio" name="ckbox" id="ckbox1" value="상의"  onClick={(e)=>{Showtop(true); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false);  val="상의"; setKind(val);}} />
                        <span>상의</span>
                    </label>
                    <label>
                        <input type="radio" name="ckbox" id="ckbox1" value="하의" onClick={(e)=>{Showbottom(true); Showtop(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false);  val="하의"; setKind(val);}}/>
                        <span>하의</span>
                    </label>
                    <label>
                        <input type="radio" name="ckbox" id="ckbox1" value="신발" onClick={(e)=>{Showtop(false); Showbottom(false); Showshoes(true); Showbag(false); Showac(false); Showouter(false);  val="신발"; setKind(val);}}/>
                        <span>신발</span>
                    </label>
                    <label>
                        <input type="radio" name="ckbox" id="ckbox1" value="가방" onClick={(e)=>{Showtop(false); Showbottom(false); Showshoes(false); Showbag(true); Showac(false); Showouter(false); val="가방"; setKind(val); }}/>
                        <span>가방</span>
                    </label>
                    <label>
                        <input type="radio" name="ckbox" id="ckbox1" value="악세사리" onClick={(e)=>{Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(true); Showouter(false);  val="악세사리"; setKind(val);}}/>
                        <span>악세사리</span>
                    </label>
                    <label>
                        <input type="radio" name="ckbox" id="ckbox1" value="아우터" onClick={(e)=>{Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(true);  val="아우터"; setKind(val);}}/>
                        <span>아우터</span>
                    </label>
                    <label>
                        <input type="radio" name="ckbox" id="ckbox1" value="기타" onClick={(e)=>{Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false);  val="기타"; setKind(val);}}/>
                        <span>기타</span>
                    </label>
                    </div>
                    </div>
                </div>


                <div className='step3'>
                    <hr></hr>
                    <span id='step3'>step3</span>
                    <br></br><br></br>
                    <span id='intro3'>세부사항</span>
                    <br></br><br></br>
                    <div className='bet1'>
                        {top?<Top setDetail={setDetail} detail={detail} />: <Blank/> }
                        {bottom? <Bottom setDetail={setDetail} detail={detail}/>:<Blank/>}
                        {shoes? <Shoes setDetail={setDetail} detail={detail}/>:<Blank/>}
                        {bag? <Bag setDetail={setDetail} detail={detail}/>: <Blank />}
                        {ac? <Ac setDetail={setDetail} detail={detail}/>:<Blank/>}
                        {outer? <Outer setDetail={setDetail} detail={detail}/>:<Blank/>}
                    </div>
                    {/* <div className='bet2'></div> */}
                </div>

                <div className='step4'>
                    <hr></hr>
                    <span id='step4'>step4</span><br></br><br></br>
                    <span id='intro4'>색상</span><br></br><br></br>
                    <Check setColor={setColor} color={color}/>

                </div>

                <div className='step5'>
                    <hr></hr>
                    <span id='step5'>step5</span><br></br><br></br>
                    <span id='intro5'>무늬</span><br></br><br></br><br></br>
                    <div className='pattern'>
                    <RadioInput label="무지" value="무지" checked={pattern} setter={setPattern}/>
                    <RadioInput label="그래픽" value="그래픽" checked={pattern} setter={setPattern}/>
                    <RadioInput label="레터링" value="레터링" checked={pattern} setter={setPattern}/>
                    <RadioInput label="스프라이트" value="스프라이트" checked={pattern} setter={setPattern}/>
                    <br></br><br></br><br></br>
                    <RadioInput label="플로럴" value="플로럴" checked={pattern} setter={setPattern}/>
                    <RadioInput label="체크" value="체크" checked={pattern} setter={setPattern}/>
                    <RadioInput label="기타" value="기타" checked={pattern} setter={setPattern}/>
                    </div>
                </div>

                <div className='step6'>
                    <hr></hr>
                    <span id='step6'>step6</span><br></br><br></br>
                    <span id='intro6'>재질</span><br></br><br></br><br></br>
                    <div className='material'>
                    <RadioInput label="면" value="면" checked={material} setter={setMaterial}/>
                    <RadioInput label="니트" value="니트" checked={material} setter={setMaterial}/>
                    <RadioInput label="벨벳" value="벨벳" checked={material} setter={setMaterial}/>
                    <RadioInput label="합성섬유" value="합성섬유" checked={material} setter={setMaterial}/>
                    <RadioInput label="기타" value="기타" checked={material} setter={setMaterial}/>
                    </div>
                </div>

                <div className='step7'>
                    <hr></hr>
                    <span id='step7'>step7</span><br></br><br></br>
                    <span id='intro7'>스타일</span><br></br><br></br><br></br>
                    <div className='style'>
                    <RadioInput label="캐주얼" value="캐주얼" checked={style} setter={setStyle}/>
                    <RadioInput label="러블리" value="러블리" checked={style} setter={setStyle}/>
                    <RadioInput label="하이틴" value="하이틴" checked={style} setter={setStyle}/>
                    <br></br><br></br><br></br>
                    <RadioInput label="스포티" value="스포티" checked={style} setter={setStyle}/>
                    <RadioInput label="스트릿" value="스트릿" checked={style} setter={setStyle}/>
                    <RadioInput label="기타" value="기타" checked={style} setter={setStyle}/>
                    </div>
                </div>

                <div className='step8'>
                    <hr></hr>
                    <span id='step8'>step8</span><br></br><br></br>
                    <span id='intro8'>옷 키워드</span><br></br><br></br>
                    <input type="text" id="keyward" onChange={onChange} value={keyward} ></input>
                </div>

                <div className='step9'>
                    <hr></hr>
                    <span id='step9'>step9</span><br></br><br></br>
                    <span id='intro9'>선호도</span><br></br><br></br>

                    <br></br>
                    <Bar setPro={setPro} pro={pro}/>
                </div>

                <br></br><br></br>
                <div className='btn'>

                    <button id='submit' onClick={handleSubmit}>저장</button>
                    <button id='cancel'>취소</button>
                </div>
            </div>
        </form>
    )
}
export default Survey;