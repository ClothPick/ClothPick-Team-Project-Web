import React, { useState, useEffect } from 'react';
import './CSSNoticeBoard.css'
import Header from '../../Header/community_header'
import TestMethod from "../../../Test/TestMethod";
import { AiOutlineAliwangwang } from 'react-icons/ai'
import ListBox from "./ListBox";


const Freedom = () => {
    const [community, setCommunity] = useState([]);
    const [click, setClick] = useState(true);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
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
                <h2 className='text-margin-top-30 text-margin-left-10 '>옷 추천</h2>
            </div>

            {/* box */}
            {community && community
                .filter((data) => data.boardType === '3')
                .map((data) => (
                    <ListBox
                        key={data.boardId}
                        boardId={data.boardId}
                        boardType={data.boardType}
                        boardTitle={data.boardTitle}
                        boardContent={data.boardContent}
                        createAt={data.createAt}
                        userName={data.userName}
                    />
                ))}

        </div>
    );
};

export default Freedom;