import './Survey.css'
import './Picture.css'

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import Picture from './Picture'
import Check from './Checkbox'
import Top from './details/Top'
import Bottom from './details/Bottom'
import Blank from './details/Blank'
import Shoes from './details/Shoes'
import Bag from './details/Bag'
import Ac from './details/Ac'
import Outer from './details/Outer'
import Bar from './Progressbar/Bar'
import ClosetMethod from '../../Test/ClosetMethod'
import empty from '../../img/empty.PNG'



const Survey = () => {
    // const [picture, setPicture] = React.useState();
    const [clothType, setKind] = React.useState("");
    const [clothDetail, setDetail] = useState();
    const [clothColor, setColor] = React.useState([]);
    const [clothPattern, setPattern] = React.useState();
    const [clothTexture, setMaterial] = React.useState();
    const [clothStyle, setStyle] = React.useState();
    const [clothKeyword, setKeyward] = React.useState("");
    const [clothPref, setPro] = React.useState(0);

    const [top, Showtop] = useState(false);
    const [bottom, Showbottom] = useState(false);
    const [shoes, Showshoes] = useState(false);
    const [bag, Showbag] = useState(false);
    const [outer, Showouter] = useState(false);
    const [ac, Showac] = useState(false);

    const [imageUrl, setImageUrl] = useState(null);
    const [img, setImg] = useState([]);


    const onChangeImage = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        img.push(file);
        console.log("img임 : ", img);
        console.log(file);

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };

    };

    const history = useHistory(); // 등록 후 화면 이동

    const handleSubmit = async (e) => {
        // ------ 옷 정보 추가 ------
        e.preventDefault();
        const data = { clothType, clothDetail, clothColor, clothPattern, clothTexture, clothStyle, clothKeyword, clothPref };
        const json = JSON.stringify(data, null, 8);
        console.log(json); // 저장 파일

        let clothId = await ClosetMethod.ClosetInfoPost(clothType, clothDetail, clothColor, clothPattern, clothTexture, clothStyle, clothKeyword, clothPref);

        // ------ 옷 정보, 옷 이미지 추가 -------
        console.log("img인데요 : ", img);

        if (img.length > 0) {
            let formData = new FormData();
            console.log("img : ", img[0]);
            formData.append("file", img[0]);

            let imgName = await ClosetMethod.ClosetImgUpload(formData);

            console.log("등록 완료");


            console.log("imgName", imgName);
            console.log("clothId", clothId);
            // ------- 옷, 이미지 연결 server로 post --------
            await ClosetMethod.ConnectClosetImgPost(imgName, clothId);

            alert("등록되었습니다.");
            history.push("/closet");
        }
        else {
            alert("이미지를 추가하세요.");
        }



    };

    var val;

    const onChange = (e) => {
        setKeyward(e.target.value);
    }

    const RadioInput = ({ label, value, checked, setter }) => {
        return (
            <label>
                <input type="radio" id='choice' checked={checked == value}
                    onChange={() => setter(value)} />
                <span>{label}</span>
            </label>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Stotal">
                <div className="input_image">
                    <img src={imageUrl ? imageUrl : empty} alt="cimg" id="cimg"></img>
                    <label htmlFor="file" name="file" onChange={(e) => { onChangeImage(e); console.log() }}>파일 선택</label>
                    <br></br>
                    <input type="file" name="file" onChange={(e) => { onChangeImage(e); }} id="file"></input>

                </div>
                {/* <Picture setPicture={setPicture} picture={picture} /> */}

                <div className='step2'>

                    <span id='step2'>step1</span>
                    <br></br><br></br><br></br>
                    <div className='choice2'>
                        <div className='detail'>
                            <label id="top">
                                <input type="radio" label="상의" name="ckbox" id="ckbox1" value="상의" onClick={(e) => { Showtop(true); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false); val = "상의"; setKind(val); }} />
                                <span>상의</span>
                            </label>
                            <label>
                                <input type="radio" name="ckbox" id="ckbox1" value="하의" onClick={(e) => { Showbottom(true); Showtop(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false); val = "하의"; setKind(val); }} />
                                <span>하의</span>
                            </label>
                            <label>
                                <input type="radio" name="ckbox" id="ckbox1" value="신발" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(true); Showbag(false); Showac(false); Showouter(false); val = "신발"; setKind(val); }} />
                                <span>신발</span>
                            </label>
                            <label>
                                <input type="radio" name="ckbox" id="ckbox1" value="가방" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(true); Showac(false); Showouter(false); val = "가방"; setKind(val); }} />
                                <span>가방</span>
                            </label>
                            <label>
                                <input type="radio" name="ckbox" id="ckbox1" value="악세사리" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(true); Showouter(false); val = "악세사리"; setKind(val); }} />
                                <span>악세사리</span>
                            </label>
                            <label>
                                <input type="radio" name="ckbox" id="ckbox1" value="아우터" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(true); val = "아우터"; setKind(val); }} />
                                <span>아우터</span>
                            </label>
                            <label>
                                <input type="radio" name="ckbox" id="ckbox1" value="기타" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false); val = "기타"; setKind(val); }} />
                                <span>기타</span>
                            </label>
                        </div>
                    </div>
                </div>


                <div className='step3'>
                    <hr />

                    <span id='step3'>step2</span>
                    <br></br><br></br>
                    <span id='intro3'>세부사항</span>
                    <br></br><br></br>
                    <div className='bet1'>
                        {top ? <Top setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                        {bottom ? <Bottom setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                        {shoes ? <Shoes setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                        {bag ? <Bag setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                        {ac ? <Ac setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                        {outer ? <Outer setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                    </div>
                    {/* <div className='bet2'></div> */}
                </div>

                <div className='step4'>
                    <hr />

                    <span id='step4'>step3</span><br></br><br></br>
                    <span id='intro4'>색상</span><br></br><br></br>
                    <Check setColor={setColor} color={clothColor} />

                </div>

                <div className='step5'>
                    <hr />

                    <span id='step5'>step4</span><br></br><br></br>
                    <span id='intro5'>무늬</span><br></br><br></br>
                    <div className='pattern'>
                        <RadioInput label="무지" value="무지" checked={clothPattern} setter={setPattern} />
                        <RadioInput label="그래픽" value="그래픽" checked={clothPattern} setter={setPattern} />
                        <RadioInput label="레터링" value="레터링" checked={clothPattern} setter={setPattern} />
                        <RadioInput label="스프라이트" value="스프라이트" checked={clothPattern} setter={setPattern} />
                        <br></br><br></br><br></br>
                        <RadioInput label="플로럴" value="플로럴" checked={clothPattern} setter={setPattern} />
                        <RadioInput label="체크" value="체크" checked={clothPattern} setter={setPattern} />
                        <RadioInput label="기타" value="기타" checked={clothPattern} setter={setPattern} />
                    </div>
                </div>

                <div className='step6'>
                    <hr />

                    <span id='step6'>step5</span><br></br><br></br>
                    <span id='intro6'>재질</span><br></br><br></br><br></br>
                    <div className='material'>
                        <RadioInput label="면" value="면" checked={clothTexture} setter={setMaterial} />
                        <RadioInput label="니트" value="니트" checked={clothTexture} setter={setMaterial} />
                        <RadioInput label="벨벳" value="벨벳" checked={clothTexture} setter={setMaterial} />
                        <RadioInput label="합성섬유" value="합성섬유" checked={clothTexture} setter={setMaterial} />
                        <RadioInput label="기타" value="기타" checked={clothTexture} setter={setMaterial} />
                    </div>
                </div>

                <div className='step7'>
                    <hr />
                    <span id='step7'>step6</span><br></br><br></br>
                    <span id='intro7'>스타일</span><br></br><br></br>
                    <div className='style'>
                        <RadioInput label="캐주얼" value="캐주얼" checked={clothStyle} setter={setStyle} />
                        <RadioInput label="러블리" value="러블리" checked={clothStyle} setter={setStyle} />
                        <RadioInput label="하이틴" value="하이틴" checked={clothStyle} setter={setStyle} />
                        <br></br><br></br><br></br>
                        <RadioInput label="스포티" value="스포티" checked={clothStyle} setter={setStyle} />
                        <RadioInput label="스트릿" value="스트릿" checked={clothStyle} setter={setStyle} />
                        <RadioInput label="기타" value="기타" checked={clothStyle} setter={setStyle} />
                    </div>
                </div>

                <div className='step8'>
                    <hr />
                    <span id='step8'>step7</span><br></br><br></br>
                    <span id='intro8'>옷 키워드</span><br></br><br></br>
                    <input type="text" id="keyward" onChange={onChange} value={clothKeyword} ></input>
                </div>

                <div className='step9'>
                    <hr />
                    <span id='step9'>step8</span><br></br><br></br>
                    <span id='intro9'>선호도</span><br></br><br></br>

                    <br></br>
                    <Bar setPro={setPro} pro={clothPref} />
                </div>

                <br></br><br></br>
                <div className='btn'>

                    <button id='submit' onClick={handleSubmit}>저장</button>
                    <button id='cancel' onClick={() => history.replace("/closet")}>취소</button>
                </div>
            </div>
        </form>
    )
}
export default Survey;