import React, { useState, useRef } from 'react';
import Header from '../Header/community_header'
import './NoticeBoard/CSSClothRecommend.css'
import Radio from '../Component/Radio';
import RadioGroup from '../Component/RadioGroup';
import { useHistory, Link } from 'react-router-dom';
import TestMethod from '../../Test/TestMethod';

const Writing = () => {
    const [url, setUrl] = useState([]); // URL
    const [imgList, setImgList] = useState([]); // 서버로 보낼 데이터
    const [click, setClick] = useState(false); // 화면 렌더링
    const [title, setTitle] = useState(""); // 제목
    const [content, setContent] = useState(""); // 내용
    const [type, setType] = useState(1);
    const [boardid, setBoardId] = useState();
    const [imgid, setImgId] = useState([]);
    let get
    let list = [];
    const onChangeImage = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        imgList.push(file);
        console.log(imgList);

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            url.push(reader.result);
            // console.log(reader.result);
            setClick(!click); // 사진 표시를 위한 렌더링
        };
        console.log(url);
    };

    const ontext = async () => {
        get = await TestMethod.CommunityTestListPost(title, content)
        let formData = new FormData();
        for (let i = 0; i < imgList.length; i++) {
            formData.append('file', imgList[i])
        }
        list = await TestMethod.BoardImgPost(formData);

        for (let i = 0; i < list.length; i++) {
            await TestMethod.BoardConnectImgPost(type, get, list[i])
            console.log("실행되나?")
        }
    }

    const history = useHistory(); // 등록 후 화면 이동

    const Checking = async () => {
        var check = document.titles.title.value;
        if (check === "" || check === null) {
            alert('제목을 입력해주세요.');
            document.titles.title.focus(); // 마우스 커서 포커스 제목으로 이동
            return;
        }
        else {
            await ontext();
            alert('등록되었습니다.');
            history.replace('/community');
        }
    }


    return (
        <div>
            <Header />

            <div className='white-space'>
                <h2 className='m-l-100'>글 쓰기</h2>
                <hr />
            </div>

            {/* 카테고리 선택 */}
            <div className='white-space m-l-100 text-top-2'>
                <h4>카테고리</h4>
                <RadioGroup>
                    <Radio name='category' value='옷 추천' defaultChecked>
                        옷 추천
                    </Radio>
                    <Radio name='category' value='중고거래'>
                        중고거래
                    </Radio>
                    <Radio name='category' value='자유 게시판'>
                        자유 게시판
                    </Radio>
                </RadioGroup>
            </div>

            {/* 게시물 제목 */}
            <form name='titles' className='white-space m-t-50 center'>
                <input
                    name='title'
                    value={title}
                    type='text'
                    className='inputField'
                    placeholder='제목'
                    onChange={({ target: { value } }) => setTitle(value)}
                />
            </form>

            {/* 게시물 내용 */}
            <div className='white-space m-t-50 center'>
                <textarea
                    value={content}
                    className='inputContents'
                    placeholder='내용'
                    onChange={({ target: { value } }) => setContent(value)}
                ></textarea>
            </div>

            {/* 사진 띄우기 */}
            <div>
                {
                    url.map((data, index) => (
                        <div key={index} className="center">
                            <img src={data} id="cimg" />
                        </div>
                    ))
                }
            </div>

            {/* 사진 첨부 */}
            <div className="white-space m-t-50 center input_image">
                {/* <p> */}
                {/* <div className='img-upload' ><span>+</span> */}
                <div className='img-upload'>
                    <label htmlFor="file" onChange={(e) => { onChangeImage(e) }}>
                        <div className='img-upload' ><span>+</span></div>
                        {/* <img src={empty} alt="cimg" id="cimg" /> */}
                    </label>
                </div>
                <input type="file" onChange={(e) => { onChangeImage(e) }} id="file"></input>

            </div>

            {/* 버튼 */}
            <div className="white-space m-t-50 center">

                <button className='brown-round scrap'
                    onClick={() => {
                        Checking()
                    }}>등록</button>

                <Link to="/">
                    <button className='brown-round scrap'>취소</button>
                </Link>
            </div>

        </div>
    );
};

export default Writing;