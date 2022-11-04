import React, { useState, useEffect } from 'react';
import '../NoticeBoard.css'
import Header from  "../../../../common/header/communityHeader/Header";
import TestMethod from '../../../../../apis/Test/TestMethod';
import { AiOutlineAliwangwang } from 'react-icons/ai'
import ListBox from "../../noticeBoardComponent/MainPostComponent";


const Freedom = () => {
    const [community, setCommunity] = useState([]);
    const [click, setClick] = useState(true);

    useEffect(() => {
        const get = TestMethod.BoardTextTypeList(3);
        const getData = () => {
            get.then(data => {
                setCommunity(data);
            });
        };
        getData();
    }, [click]);

    return (
        <div>
            <Header />
            <div className='flex commu-type margin'>
                <AiOutlineAliwangwang size="80" color='#BDC2BB' />
                <h2 className='text-margin-top-30 text-margin-left-10 '>자유 게시판</h2>
            </div>

            {/* box */}
            {community && community
                .map((data) => (
                    <ListBox
                        key={data.boardId}
                        boardId={data.boardId}
                        boardType={data.boardType}
                        boardTitle={data.boardTitle}
                        boardContent={data.boardContent}
                        boardCreateAt={data.boardCreateAt}
                        userNickname={data.userNickname}
                        commentCount={data.commentCount}
                    />
                ))}

        </div>
    );
};

export default Freedom;