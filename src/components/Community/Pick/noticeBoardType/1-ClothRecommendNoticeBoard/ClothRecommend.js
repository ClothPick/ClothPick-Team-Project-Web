import React, { useState, useEffect } from 'react';
import Header from  "../../../../common/header/communityHeader/Header"
import "../NoticeBoard.css"
import { AiFillSkin } from 'react-icons/ai';
import TestMethod from '../../../../../apis/Test/TestMethod';
import ListBox from '../../noticeBoardComponent/MainPostComponent';

const ClothRecommend = () => {
    const [community, setCommunity] = useState([]);
    const [click, setClick] = useState(true);

    useEffect(() => {
        const get = TestMethod.BoardTextTypeList(1);
        const getData = () => {
            get.then(data => {
                setCommunity(data);
                // data.map((id) => (
                //     console.log(id.boardId)
                // ))
                // console.log(data)
            });
        };
        getData();
    }, [click]);



    return (
        <div>
            <Header />
            <div className='flex commu-type margin'>
                <AiFillSkin size="80" color='#BDC2BB' />
                <h2 className='text-margin-top-30 text-margin-left-10 '>옷 추천</h2>
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


export default ClothRecommend;