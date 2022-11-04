import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

import './ModifyChoice.css'
import Top from '../clothModifyDetail/top/Top'
import Bottom from '../clothModifyDetail/bottom/Bottom'
import Blank from "../../../closetSidebar/closetAddCloth/step3-details/DetailBlank"
import Shoes from '../clothModifyDetail/shoes/Shoes'
import Bag from '../clothModifyDetail/bag/Bag'
import Ac from '../clothModifyDetail/accessory/Accessory'
import Outer from '../clothModifyDetail/outer/Outer'
// import Check from '../color/Color'
// import Bar from '../preference/Preference'
import ClosetMethod from "../../../../Test/ClosetMethod";
import { AiFillSkin } from 'react-icons/ai';

const RadioInput = ({ label, value, checked }) => {
    return (
        <label>
            <input type="radio" id='choice2' checked={checked == value}
            />
            <span>{label}</span>
        </label>
    )
}

const Modify_choice = () => {

    var url = window.location.pathname.split("/")[2];
    // console.log("url:", url);

    const [clothColor, setColor] = useState([]);
    const [clothKeyword, setKeyward] = useState("");
    const [clothPref, setPro] = useState(0);

    //----------db------------
    const [clothId, setClothId] = useState([]); // useEffect monitor value
    const [clothInfo, setClothInfo] = useState([]);
    const [dbType, setDbType] = useState([]);
    const [dbDetail, setDbDetail] = useState([]);
    const [dbColor, setDbColor] = useState([]);
    const [dbPattern, setDbPattern] = useState([]);
    const [dbTexture, setDbTexture] = useState([]);
    const [dbStyle, setDbStyle] = useState([]);
    const [dbPref, setDbPref] = useState("");

    const [useMonitor, setUseMonitor] = useState(false);

    const history = useHistory(); // 등록 후 화면 이동


    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (window.confirm("수정하시겠습니까?")) {
        let result = await ClosetMethod.ClosetInfoPut(clothId, clothKeyword);
        console.log(result);
        alert("수정되었습니다.")
        history.push("/closet")
        // }

    };


    // 삭제
    const deleteBook = async (e) => {
        e.preventDefault();
        if (window.confirm("삭제하시겠습니까?")) {
            console.log(clothId);
            let result = await ClosetMethod.ClosetInfoDelete(clothId);
            console.log(result);

            alert("삭제되었습니다.")
            history.push("/closet");
        }
    }

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
                        // console.log(data[i].clothId);
                    }
                }
            })

            clothGet.then(data => {
                setClothInfo(data);
                // console.log(data);
            })


        };

        const checkId = () => {
            // 만약 clothInfo가 undefined가 아니고 null이 아니면
            let result = clothInfo.filter((info) => {
                return info.clothId === clothId;
            })

            if (result[0]?.clothType && result[0]?.clothDetail && result[0]?.clothPattern &&
                result[0]?.clothColor && result[0]?.clothTexture && result[0]?.clothStyle) {
                // console.log(result[0].clothType);
                setDbType(result[0].clothType);
                // console.log(result[0].clothDetail);
                setDbDetail(result[0].clothDetail);
                // console.log(result[0].clothPattern);
                setDbPattern(result[0].clothPattern);
                // console.log(result[0].clothTexture);
                setDbTexture(result[0].clothTexture);
                console.log(result[0].clothStyle);
                setDbStyle(result[0].clothStyle);
                // console.log(result);
                // console.log(result[0].clothPref);
                if (result[0].clothPref === '0') {
                    setDbPref("완전 별로😣");
                }
                else if (result[0].clothPref === '1') {
                    setDbPref("별로😑");
                }
                else if (result[0].clothPref === '2') {
                    setDbPref("보통🙂");
                }
                else if (result[0].clothPref === '3') {
                    setDbPref("좋아😄");
                }
                else {
                    setDbPref("완전 좋아😆");
                }

                for (let i = 0; i < result.length; i++) {
                    console.log(result[i].clothColor);
                    if (result[i].clothColor === "red") {
                        dbColor.push(<AiFillSkin size='35' color='red' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "orange") {
                        dbColor.push(<AiFillSkin size='35' color='orange' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "yellow") {
                        dbColor.push(<AiFillSkin size='35' color='yellow' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "green") {
                        dbColor.push(<AiFillSkin size='35' color='green' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "blue") {
                        dbColor.push(<AiFillSkin size='35' color='blue' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "purple") {
                        dbColor.push(<AiFillSkin size='35' color='purple' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "pink") {
                        dbColor.push(<AiFillSkin size='35' color='pink' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "beige") {
                        dbColor.push(<AiFillSkin size='35' color='beige' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "brown") {
                        dbColor.push(<AiFillSkin size='35' color='brown' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "black") {
                        dbColor.push(<AiFillSkin size='35' color='black' className='m-t-15 text-right scrap' />);
                    }
                    else if (result[i].clothColor === "white") {
                        dbColor.push(<AiFillSkin size='35' color='white' className='m-t-15 text-right scrap' />);
                    }
                    else {
                        dbColor.push(<AiFillSkin size='35' color='gray' className='m-t-15 text-right scrap' />);
                    }
                }


                // for (let i = 0; i < result.length; i++) {
                //     dbColor.push(result[i].clothColor);
                //     // console.log(result[i].clothColor)
                // }
                // console.log(dbColor);

            }
            else {
                // console.log("clothType 인식 안돼요");
                useMonitor ? setUseMonitor(false) : setUseMonitor(true);
            }
        }

        checkId();
        getData();
    }, [useMonitor])


    // 옷 데이터에서 중복 값 제거 하는 함수 -- 키워드를 위한 함수
    const removeDuple = () => {
        let result = clothInfo.filter((item, i) => {
            return (
                clothInfo.findIndex((item2, j) => {
                    return item.clothId === item2.clothId;
                }) === i
            );
        })
        // console.log(result);

        let result2 = result.map(data => (
            clothId === data.clothId ?
                <input type="text" id="mkeyward" onChange={(e) => onChange(e)} defaultValue={data.clothKeyword}></input>
                : null
        ))
        return result2;
    }

    const changeRadio = (e) => {
        // setDbType(e.target.value)
    }

    return (
        < form onSubmit={handleSubmit} >
            <div className="modtotal">
                <div className="quest2">
                    <span id='quest2'>종류</span>
                    <br></br><br></br>
                    <div className='quest2_answer'>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="상의"
                                checked={dbType === "상의" ? true : false}
                            />
                            <span id="span1">상의</span>
                        </label>

                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="하의"
                                checked={dbType === "하의" ? true : false}
                            />


                            <span id="span1">하의</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="신발"
                                checked={dbType === "신발" ? true : false}
                            />


                            <span id="span1">신발</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="가방"
                                checked={dbType === "가방" ? true : false}
                            />



                            <span id="span1">가방</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="악세사리"
                                checked={dbType === "악세사리" ? true : false}
                            />


                            <span id="span1">악세사리</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="아우터"
                                checked={dbType === "아우터" ? true : false}
                            />


                            <span id="span1">아우터</span>
                        </label>
                        <label id="detail">
                            <input type="radio" name="ckbox" id="answer" value="기타"
                                checked={dbType === "기타" ? true : false}
                            />


                            <span id="span1">기타</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------- */}

            <div className='quest3'>
                <span id='quest3'>세부사항</span>
                <br></br><br></br>
                <div className='de'>
                    {dbType === "상의" ? <Top detail={dbDetail} /> : <Blank />}
                    {dbType === "하의" ? <Bottom detail={dbDetail} /> : <Blank />}
                    {dbType === "신발" ? <Shoes detail={dbDetail} /> : <Blank />}
                    {dbType === "가방" ? <Bag detail={dbDetail} /> : <Blank />}
                    {dbType === "악세사리" ? <Ac detail={dbDetail} /> : <Blank />}
                    {dbType === "아우터" ? <Outer detail={dbDetail} /> : <Blank />}
                </div>
            </div>

            {/* ------------------------------------------------- */}

            <div className='quest4'>
                <span id='quest4'>색상</span><br></br><br></br>
                <div id="colorheart">
                    {
                        dbColor.map((color) => {
                            return (
                                <span>
                                    {color}
                                </span>
                            );
                        })
                    }
                </div>
                {/* <Check setColor={setColor} color={clothColor} colorList={clothColor} /> */}
            </div>

            {/* ------------------------------------------------- */}

            <div className='quest5'>

                <span id='quest5'>무늬</span><br></br><br></br>
                <div className='mpattern'>
                    <RadioInput label="무지" value="무지" checked={dbPattern} />
                    <RadioInput label="그래픽" value="그래픽" checked={dbPattern} />
                    <RadioInput label="레터링" value="레터링" checked={dbPattern} />
                    <RadioInput label="스프라이트" value="스프라이트" checked={dbPattern} />
                    <RadioInput label="플로럴" value="플로럴" checked={dbPattern} />
                    <RadioInput label="체크" value="체크" checked={dbPattern} />
                    <RadioInput label="기타" value="기타" checked={dbPattern} />
                </div>
            </div>

            {/* ------------------------------------------------- */}

            <div className='quest6'>
                <span id='quest6'>재질</span><br></br><br></br>
                <div className='modmaterial'>

                    <RadioInput label="면" value="면" checked={dbTexture} />
                    <RadioInput label="니트" value="니트" checked={dbTexture} />
                    <RadioInput label="벨벳" value="벨벳" checked={dbTexture} />
                    <RadioInput label="합성섬유" value="합성섬유" checked={dbTexture} />
                    <RadioInput label="기타" value="기타" checked={dbTexture} />
                </div>
            </div>

            {/* ------------------------------------------------- */}

            <div className='quest7'>
                <span id='quest7'>스타일</span><br></br><br></br><br></br>
                <div className='mstyle'>
                    <RadioInput label="캐주얼" value="캐주얼" checked={dbStyle} />
                    <RadioInput label="러블리" value="러블리" checked={dbStyle} />
                    <RadioInput label="하이틴" value="하이틴" checked={dbStyle} />
                    <RadioInput label="스포티" value="스포티" checked={dbStyle} />
                    <RadioInput label="스트릿" value="스트릿" checked={dbStyle} />
                    <RadioInput label="기타" value="기타" checked={dbStyle} />
                </div>
            </div>

            {/* ------------------------------------------------- */}

            <div className='quest8'>
                <span id='quest8'>옷 키워드</span><br></br><br></br>
                {/* 키워드 추가(clothId 중복제거) */}
                {removeDuple()}
            </div>

            {/* ------------------------------------------------- */}

            <div className='quest9'>

                <span id='quest9'>선호도</span><br></br><br></br>
                <span className="m-l-150">{dbPref}</span>
                <br></br>
            </div>

            <div className='BTN'>
                <br></br><br></br><br></br><br></br><br></br>
                <button id='submit' onClick={(e) => handleSubmit(e)}>수정</button>
                <button id='cancel' onClick={(e) => deleteBook(e)}>삭제</button>
            </div>
        </form >
    )
}
export default Modify_choice;



