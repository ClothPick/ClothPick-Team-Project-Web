import React, { useState, useEffect, useRef } from 'react';
import './closetList.css'
import cloth1 from '../../img/cloth1.png'
import Accordion from '../Accordion/Accordion';
import "../Accordion/Accordion.css";
import { IoMdArrowDropleftCircle } from "react-icons/io"
import { IoMdArrowDroprightCircle } from "react-icons/io"
import ClosetMethod from '../../Test/ClosetMethod';


function ClosetList() {
    const [textColor, setTextColor] = useState('black');

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const [onepage, setOnepae] = useState([]);
    const [pageNumbers, setPageNumbers] = useState([]);

    const [clothImg, setClothImg] = useState([]);

    useEffect(() => {
        const get = ClosetMethod.ConnectClosetImgGet();
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
        };
        getData();
    }, [currentPage]);

    // useEffect(() => {

    //     const abc = [];
    //     setOnepae(list.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6))
    //     for (var i = 1; i <= Math.ceil(list.length / postsPerPage); i++) {
    //         abc.push(i);
    //     }
    //     setPageNumbers(abc)
    // }, [currentPage]);



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



    const list = [
        {
            id: 1,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'

        },
        {
            id: 2,
            img: <img src={cloth1} alt=""></img>,
            explain: '체크 난방'
        },
        {
            id: 3,
            img: <img src={cloth1} alt=""></img>,
            explain: '내가 좋아하는 니트'
        },
        {
            id: 4,
            img: <img src={cloth1} alt=""></img>,
            explain: '디스 이즈'
        },
        {
            id: 5,
            img: <img src={cloth1} alt=""></img>,
            explain: '베이지 반팔티'
        },
        {
            id: 6,
            img: <img src={cloth1} alt=""></img>,
            explain: '푸마 반팔'
        },
        {
            id: 7,
            img: <img src={cloth1} alt=""></img>,
            explain: '반팔인데 로고 민트 7'
        },
        {
            id: 8,
            img: <img src={cloth1} alt=""></img>,
            explain: '언제 샀는지 기억 안나  8'
        },
        {
            id: 9,
            img: <img src={cloth1} alt=""></img>,
            explain: '커버낫123 9'
        },
        {
            id: 10,
            img: <img src={cloth1} alt=""></img>,
            explain: '커버낫'
        },
        {
            id: 11,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 12,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 13,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 14,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 15,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 16,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 17,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 18,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 19,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 20,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 21,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 22,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 23,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 24,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 25,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 26,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 27,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        },
        {
            id: 28,
            img: <img src={cloth1} alt=""></img>,
            explain: '기모 긴팔 티'
        }


    ];

    return (
        <div className='root'>
            <Accordion />
            <div>
                <div className='itemlist'>
                    {
                        onepage.map(data => (
                            // <div key={data.clothImgName}>
                            // </div>
                            <img alt='' src={`http://192.168.0.109:80/api/displayimg/${data.clothImgName}.jpg`} />
                        ))
                        // onepage.map(data => (
                        //     <div key={data.id}>
                        //         <div className='itemimg'>{data.img}</div>
                        //         <div className='itemname'>{data.explain}</div>
                        //     </div>
                        // ))
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