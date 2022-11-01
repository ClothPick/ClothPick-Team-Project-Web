import React, { useState, useRef, useEffect } from 'react';
import Header from "../../../Header/communityHeader/Header"
import "./Writing.css"
import Radio from "../../../Component/Radio/Radio"
import RadioGroup from '../../../Component/Radio/RadioGroup';
import { useHistory, Link } from 'react-router-dom';
import TestMethod from '../../../Test/TestMethod';

const Writing = (props) => {
    const [url, setUrl] = useState([]); // URL
    const [imgList, setImgList] = useState([]); // 서버로 보낼 데이터
    const [click, setClick] = useState(false); // 화면 렌더링
    const [title, setTitle] = useState(""); // 제목
    const [content, setContent] = useState(""); // 내용
    const [type, setType] = useState(1);

    const history = useHistory(); // 등록 후 화면 이동

    console.log(props.boardId);



    const update = async () => {
        // const get = await TestMethod.BoardUpdate(props.boardId, props.boardTitle, props.boardContent)
    }


    const Checking = async () => {
        var check = document.titles.title.value;
        if (check === "" || check === null) {
            alert('제목을 입력해주세요.');
            document.titles.title.focus(); // 마우스 커서 포커스 제목으로 이동
            return;
        }
        else {
            alert('수정되었습니다.');
            // history.replace('/community');
        }
    }


    return (
        <div>
            <Header />

            <div className='white-space'>
                <h2>글 수정</h2>
                <hr />
            </div>

            {/* 카테고리 선택 */}
            <div className='white-space m-l-100 text-top-2'>
                <h4>카테고리</h4>
                <RadioGroup>
                    <Radio name='category' value='1' defaultChecked>
                        옷 추천
                    </Radio>
                    <Radio name='category' value='2'>
                        중고거래
                    </Radio>
                    <Radio name='category' value='3'>
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
                            <img src={data} id="cimg" alt='' />
                        </div>
                    ))
                }
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