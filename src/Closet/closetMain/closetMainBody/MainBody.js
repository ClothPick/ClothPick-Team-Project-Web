import React, { useState, useEffect, useRef } from 'react';
import './MainBody.css'
import Accordion from './closetFilter/Filter';
import "../closetMainBody/closetFilter/Filter.css"
import { IoMdArrowDropleftCircle } from "react-icons/io"
import { IoMdArrowDroprightCircle } from "react-icons/io"
import ClosetMethod from '../../../Test/ClosetMethod';
import { Link } from "react-router-dom"

function ClosetList() {
    const [textColor, setTextColor] = useState('black');

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const [onepage, setOnepae] = useState([]);
    const [pageNumbers, setPageNumbers] = useState([]);

    const [clothImg, setClothImg] = useState([]);
    const [clothInfo, setClothInfo] = useState([]);

    var keywords = [];

    useEffect(() => {
        const get = ClosetMethod.ConnectClosetImgGet();
        const closetInfo = ClosetMethod.ClosetInfoGet();
        const page = [];

        const getData = () => {
            get.then(data => {
                setClothImg(data);
                console.log(data);

                setOnepae(data.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6));
                for (var i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
                    page.push(i);
                    console.log("page : " + page);
                }
                setPageNumbers(page);
            });

            closetInfo.then(data => {
                setClothInfo(data);
                console.log(data);
            });

        };

        getData();
    }, [currentPage]);

    const oncheck = (data) => {
        console.log('확인' + data);
        setCurrentPage(data);
        setTextColor('#CCCCC');
    }

    const next = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage >= pageNumbers.length) {
            setCurrentPage(currentPage)
        }
    }

    const prev = () => {
        setCurrentPage(currentPage - 1)
        if (currentPage <= 1) {
            setCurrentPage(currentPage);
        }
    }

    return (
        <div className='root'>
            <Accordion />
            <div>
                <div className='itemlist'>
                    {
                        // 이미지 map
                        onepage && onepage.map((img, index) => {

                            return (
                                <div key={index}>
                                    <Link to="/modifycloth">
                                        <img className="closet-img" src={`http://192.168.0.101:8080/api/v1/displayimg/closet/${img.clothImgName}`} alt="" />
                                    </Link>
                                    <div className='img-text'>
                                        {
                                            // console.log(clothInfo)
                                            // 옷 키워드 출력 코드. clothKeyword 를 가져올 수 없다고 표시됨 -- 해결방안은?
                                            clothInfo && clothInfo.length > 0 ?
                                                clothInfo.filter((connect) =>
                                                    connect.clothId === img.clothId)[0].clothKeyword : <p></p>

                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='num'>
                    <IoMdArrowDropleftCircle size="35" color="#67595e" className="circle-btn" onClick={() => prev()} />
                    {
                        pageNumbers.map((data) => (
                            <div className='pagenumBox' key={data.id}>
                                <p onClick={() => oncheck(data)}>{data}</p>
                            </div>
                        ))
                    }
                    <IoMdArrowDroprightCircle size="35" color="#67595e" className="circle-btn" onClick={() => next()} />

                </div>
            </div>

        </div >
    );
}

export default ClosetList;