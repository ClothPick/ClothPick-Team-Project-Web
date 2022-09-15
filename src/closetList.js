import React, { useState } from 'react';
import './closetList.css'
import cloth1 from './img/cloth1.png'
import Pagination from './pagination';

function List({list}){
    return(
        <div>
            <figure>
                {list.img}
                <figcaption>{list.explain}</figcaption>
            </figure>
        </div>
    )
}

function ClosetList(){
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(9);
    const indexOfLast=currentPage*postsPerPage;
    const indexOfFirst=indexOfLast-postsPerPage;
    const currentPosts=(list)=>{
        let currentPosts=0;
        currentPosts=list.slice(indexOfFirst,indexOfLast);
        return currentPosts;
    };




    const list=[
        {
            id: 1,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 2,
            img:<img src={cloth1}></img>,
            explain : '체크 난방'
        },
        {
            id: 3,
            img:<img src={cloth1}></img>,
            explain : '내가 좋아하는 니트'
        },
        {
            id: 4,
            img:<img src={cloth1}></img>,
            explain : '디스 이즈'
        },
        {
            id: 5,
            img:<img src={cloth1}></img>,
            explain : '베이지 반팔티'
        },
        {
            id: 6,
            img:<img src={cloth1}></img>,
            explain : '푸마 반팔'
        },
        {
            id: 7,
            img:<img src={cloth1}></img>,
            explain : '반팔인데 로고 민트'
        },
        {
            id: 8,
            img:<img src={cloth1}></img>,
            explain : '언제 샀는지 기억 안나'
        },
        {
            id: 9,
            img:<img src={cloth1}></img>,
            explain : '커버낫'
        },
        {
            id: 10,
            img:<img src={cloth1}></img>,
            explain : '커버낫'
        }

    ];

    return(
        <div className='root'>
                <div className='filter'>
                    필터
                </div>
                <hr></hr>
                <div className='list'>
                <br></br>
                   {
                    list.map(list=>(<List list={list}/>))
                   }
            </div>
            <div className='num'>
                <Pagination
                    postsPerPage={postsPerPage} //페이지당 포스트 수
                    totalPosts={list.length} //전체 포스트 갯수
                    paginate={setCurrentPage}></Pagination>
            </div>
        </div>
    );
}

export default ClosetList;