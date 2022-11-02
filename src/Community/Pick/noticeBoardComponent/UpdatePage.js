import React, { useState, useRef, useEffect } from 'react';
import Header from "../../../Header/communityHeader/Header"
import "./Writing.css"
import Radio from "../../../Component/Radio/Radio"
import RadioGroup from '../../../Component/Radio/RadioGroup';
import { useHistory, Link } from 'react-router-dom';
import TestMethod from '../../../Test/TestMethod';

const Writing = (props) => {
    const [type, setType] = useState(""); // 게시판 종류
    const [title, setTitle] = useState(""); // 제목
    const [content, setContent] = useState(""); // 내용
    const [boardId, setBoardId] = useState(""); // 게시물 아이디
    const [img, setImg] = useState([]); // 이미지
    const [useMonitor, setUseMonitor] = useState(false); // useEffect monitor

    // URL 주소값
    var url = window.location.pathname.split('/')[2];
    // console.log('url : ' + window.location.pathname.split('/')[2]);

    let history = useHistory();

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                // console.log(data);

                for (var i = 0; i < data.length; i++) {
                    if (url === data[i].boardId) {
                        console.log(data);
                        // console.log(data[i].boardId);
                        setBoardId(data[i].boardId);
                        setType(data[i].boardType);
                        setTitle(data[i].boardTitle);
                        setContent(data[i].boardContent);

                        console.log(data[i].boardType);
                        console.log(data[i].boardTitle);
                        console.log(data[i].boardContent);
                    }
                }
            })


        };


        const getImg = TestMethod.ConnectBoardImgBoardIdList(url);
        const getImgData = () => {
            getImg.then(img => {
                setImg(img);
            })
        };

        getData();
        getImgData();
    }, [useMonitor]);


    const Checking = async () => {
        var check = document.titles.title.value;
        if (check === "" || check === null) {
            alert('제목을 입력해주세요.');
            document.titles.title.focus(); // 마우스 커서 포커스 제목으로 이동
            return;
        }
        else {
            await TestMethod.BoardUpdate(boardId, title, content)
            alert('수정되었습니다.');
            history.replace(`/detailpage/${boardId}`);
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
                    {type === '1' ? <Radio name='category' value='1' defaultChecked='1'> 옷 추천 </Radio> : null}
                    {type === '2' ? <Radio name='category' value='2' defaultChecked='2'> 중고거래 </Radio> : null}
                    {type === '3' ? <Radio name='category' value='3' defaultChecked='3'> 자유 게시판 </Radio> : null}
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

            <div>{props.content}</div>


            {/* 게시물 내용 */}
            <div className='white-space m-t-50 center'>
                <textarea
                    value={content}
                    className='inputContents'
                    placeholder='내용'
                    onChange={({ target: { value } }) => setContent(value)}
                ></textarea>
            </div>

            {
                img.map((data =>
                    <div key={data} className="center m-t-50">
                        <img className='img-size' alt='' src={`http://192.168.0.101:8087/api/v1/displayimg/board/${data}`} />
                    </div>
                ))
            }

            {/* 버튼 */}
            <div className="white-space m-t-50 center" >

                <button className='brown-round scrap'
                    onClick={() => {
                        Checking()
                    }}>수정</button>

                <Link to={`/detailpage/${boardId}`}>
                    <button className='brown-round scrap'>취소</button>
                </Link>
            </div>

        </div>
    );
};

export default Writing;