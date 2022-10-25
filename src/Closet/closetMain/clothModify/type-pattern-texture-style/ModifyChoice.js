import React, { useEffect } from "react";
import { useState } from "react";
import './ModifyChoice.css'
import Top from '../clothModifyDetail/top/Top'
import Bottom from '../clothModifyDetail/bottom/Bottom'
import Blank from "../../../closetSidebar/closetAddCloth/step3-details/DetailBlank"
import Shoes from '../clothModifyDetail/shoes/Shoes'
import Bag from '../clothModifyDetail/bag/Bag'
import Ac from '../clothModifyDetail/accessory/Accessory'
import Outer from '../clothModifyDetail/outer/Outer'
import Check from '../color/Color'
import Bar from '../preference/Preference'
import ClosetMethod from "../../../../Test/ClosetMethod";

const RadioInput = ({ label, value, checked, setter }) => {
    return (
        <label>
            <input type="radio" id='choice2' checked={checked == value}
                onChange={() => setter(value)} />
            <span>{label}</span>
        </label>
    )
}

const Modify_choice = () => {

    var url = window.location.pathname.split("/")[2];
    // console.log("url:", url);

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

    //----------db------------
    const [clothId, setClothId] = useState([]);
    const [clothInfo, setClothInfo] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();
        const data = { clothType, clothDetail, clothColor, clothPattern, clothTexture, clothStyle, clothKeyword, clothPref };
        const json = JSON.stringify(data, null, 10);

        console.log(json);
    };

    var vall;

    const onChange = (e) => {
        setKeyward(e.target.value);
        console.log(e.target.value);
    }

    useEffect(() => {
        // 옷-이미지 연결 테이블 정보 get
        const get = ClosetMethod.ConnectClosetImgGet();
        // 옷 정보 테이블 get
        const clothGet = ClosetMethod.ClosetInfoGet();

        const getData = () => {
            get.then(data => {

                // url주소에 있는 clothImgName와 동일한 이름 찾기
                for (var i = 0; i < data.length; i++) {
                    if (url === data[i].clothImgName) {
                        // url clothImgName과 동일한 데이터가 저장되어있는 clothId값 저장
                        setClothId(data[i].clothId);
                        console.log(data[i].clothId);
                    }
                }
            })

            clothGet.then(data => {
                setClothInfo(data);
                console.log(data);
            })
        };
        getData();
    }, [])

    const ShowData = () => {
        for (var i = 0; i < clothInfo.length; i++) {
            if (clothId === clothInfo[i].clothId) {
                setKeyward(clothInfo[i].clothKeyword);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="modtotal">

                <div className="quest2">
                    <span id='quest2'>종류</span>
                    <br></br><br></br>
                    <div className='quest2_answer'>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="상의" onClick={(e) => { Showtop(true); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false); vall = "상의"; setKind(vall); }} />
                            <span id="span1">상의</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="하의" onClick={(e) => { Showbottom(true); Showtop(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false); vall = "하의"; setKind(vall); }} />
                            <span id="span1">하의</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="신발" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(true); Showbag(false); Showac(false); Showouter(false); vall = "신발"; setKind(vall); }} />
                            <span id="span1">신발</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="가방" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(true); Showac(false); Showouter(false); vall = "가방"; setKind(vall); }} />
                            <span id="span1">가방</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="악세사리" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(true); Showouter(false); vall = "악세사리"; setKind(vall); }} />
                            <span id="span1">악세사리</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="아우터" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(true); vall = "아우터"; setKind(vall); }} />
                            <span id="span1">아우터</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="기타" onClick={(e) => { Showtop(false); Showbottom(false); Showshoes(false); Showbag(false); Showac(false); Showouter(false); vall = "기타"; setKind(vall); }} />
                            <span id="span1">기타</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='quest3'>
                <span id='quest3'>세부사항</span>
                <br></br><br></br>
                <div className='de'>
                    {top ? <Top setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                    {bottom ? <Bottom setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                    {shoes ? <Shoes setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                    {bag ? <Bag setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                    {ac ? <Ac setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                    {outer ? <Outer setDetail={setDetail} detail={clothDetail} /> : <Blank />}
                </div>
                {/* <div className='bet2'></div> */}
            </div>

            <div className='quest4'>
                <span id='quest4'>색상</span><br></br><br></br>
                <Check setColor={setColor} color={clothColor} />
            </div>

            <div className='quest5'>

                <span id='quest5'>무늬</span><br></br><br></br>
                <div className='mpattern'>
                    <RadioInput label="무지" value="무지" checked={clothPattern} setter={setPattern} />
                    <RadioInput label="그래픽" value="그래픽" checked={clothPattern} setter={setPattern} />
                    <RadioInput label="레터링" value="레터링" checked={clothPattern} setter={setPattern} />
                    <RadioInput label="스프라이트" value="스프라이트" checked={clothPattern} setter={setPattern} />
                    <RadioInput label="플로럴" value="플로럴" checked={clothPattern} setter={setPattern} />
                    <RadioInput label="체크" value="체크" checked={clothPattern} setter={setPattern} />
                    <RadioInput label="기타" value="기타" checked={clothPattern} setter={setPattern} />
                </div>
            </div>

            <div className='quest6'>
                <span id='quest6'>재질</span><br></br><br></br>
                <div className='modmaterial'>

                    <RadioInput label="면" value="면" checked={clothTexture} setter={setMaterial} />
                    <RadioInput label="니트" value="니트" checked={clothTexture} setter={setMaterial} />
                    <RadioInput label="벨벳" value="벨벳" checked={clothTexture} setter={setMaterial} />
                    <RadioInput label="합성섬유" value="합성섬유" checked={clothTexture} setter={setMaterial} />
                    <RadioInput label="기타" value="기타" checked={clothTexture} setter={setMaterial} />
                </div>
            </div>

            <div className='quest7'>
                <span id='quest7'>스타일</span><br></br><br></br><br></br>
                <div className='mstyle'>
                    <RadioInput label="캐주얼" value="캐주얼" checked={clothStyle} setter={setStyle} />
                    <RadioInput label="러블리" value="러블리" checked={clothStyle} setter={setStyle} />
                    <RadioInput label="하이틴" value="하이틴" checked={clothStyle} setter={setStyle} />
                    <RadioInput label="스포티" value="스포티" checked={clothStyle} setter={setStyle} />
                    <RadioInput label="스트릿" value="스트릿" checked={clothStyle} setter={setStyle} />
                    <RadioInput label="기타" value="기타" checked={clothStyle} setter={setStyle} />
                </div>
            </div>

            <div className='quest8'>
                <span id='quest8'>옷 키워드</span><br></br><br></br>
                <ShowData />
                {/* <input type="text" id="mkeyward" value={clothKeyword} ></input> */}
                <input type="text" id="mkeyward" onChange={onChange} value={clothKeyword} ></input>
            </div>

            <div className='quest9'>
                <span id='quest9'>선호도</span><br></br><br></br>

                <br></br>
                <Bar setPro={setPro} pro={clothPref} />
            </div>

            <div className='BTN'>
                <br></br><br></br><br></br><br></br><br></br>
                <button id='submit' onClick={handleSubmit}>저장</button>
                <button id='cancel'>취소</button>
            </div>
        </form>
    )
}
export default Modify_choice;