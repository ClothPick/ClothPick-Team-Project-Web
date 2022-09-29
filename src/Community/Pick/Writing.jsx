import React, { useState, useRef } from 'react';
import Header from '../Header/community_header'
import './NoticeBoard/CSSClothRecommend.css'
import Radio from '../Component/Radio';
import RadioGroup from '../Component/RadioGroup';
import { useHistory } from 'react-router-dom';

const Writing = () => {
    // const [imageUrl, setImageUrl] = useState('');
    const [url, setUrl] = useState([]);
    const [imgList, setImgList] = useState([]); // 서버로 보낼 데이터
    const [click, setClick] = useState(false); // 화면 렌더링
    // const imgRef = useRef();

    const onChangeImage = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        imgList.push(file);
        console.log(imgList);

        reader.readAsDataURL(file);
        reader.onloadend = () => {

            // setImageUrl(reader.result); // 사진 표시

            url.push(reader.result);
            setClick(!click); // 사진 표시를 위한 렌더링
        };

        // console.log(imageUrl);
        console.log(url);


    };

    const history = useHistory();

    const Checking = () => {
        var check = document.titles.title.value;
        if (check === "" || check === null) {
            alert('제목을 입력해주세요.');
            document.titles.title.focus();
            return;
        }
        else {
            alert('등록되었습니다.');
            history.push('/');
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
                    type='text'
                    className='inputField'
                    placeholder='제목'
                />
            </form>

            {/* 게시물 내용 */}
            <div className='white-space m-t-50 center'>
                <textarea
                    className='inputContents'
                    placeholder='내용'
                ></textarea>
            </div>

            {/* 사진 띄우기 */}
            <div>
                {
                    url.map((data, index) => (
                        <div key={index}>
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
                <button className='brown-round scrap'>취소</button>
            </div>

        </div>
    );
};

export default Writing;