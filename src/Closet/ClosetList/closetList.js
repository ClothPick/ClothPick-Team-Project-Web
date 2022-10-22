import React, { useState, useEffect, useRef } from 'react';
import './closetList.css'
import Accordion from '../Accordion/Accordion';
import "../Accordion/Accordion.css";
import { IoMdArrowDropleftCircle } from "react-icons/io"
import { IoMdArrowDroprightCircle } from "react-icons/io"
import ClosetMethod from '../../Test/ClosetMethod';
import data from '../Accordion/data';


function ClosetList() {
    const [textColor, setTextColor] = useState('black');

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const [onepage, setOnepae] = useState([]);
    const [pageNumbers, setPageNumbers] = useState([]);

    const [clothImg, setClothImg] = useState([]);
    const [clothInfo, setClothInfo] = useState([]);

    useEffect(() => {
        const get = ClosetMethod.ConnectClosetImgGet();
        const closetInfo = ClosetMethod.ClosetInfoGet();
        const abc = [];

        const getData = () => {
            get.then(data => {
                setClothImg(data);
                console.log(data);

                setOnepae(clothImg.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6));
                for (var i = 1; i <= Math.ceil(clothImg.length / postsPerPage); i++) {
                    abc.push(i);
                }
                setPageNumbers(abc);
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
                        onepage.map(data => (
                            <span key={data.clothImgName}>
                                <img alt="" className="" src={`http://192.168.0.101:8080/api/v1/displayimg/closet/${data.clothImgName}`} />
                            </span>
                        ))
                    }

                    {
                        clothInfo.map(data => (
                            <span key={data.clothId}>
                                <h3>{data.clothKeyword}</h3>
                            </span>
                        ))
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