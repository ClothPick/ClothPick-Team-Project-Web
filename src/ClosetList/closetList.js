import React, { useState, useEffect, useRef } from 'react';
import './closetList.css'
import cloth1 from '../img/cloth1.png'
import ArrowLeft from '../img/right.png'
import ArrowRight from '../img/left.png'
// import Pagination from './pagination';


function ClosetList(){
    const [textColor, setTextColor] = useState('black');

    const handleChangeTextColor=(e)=>{
        setTextColor(textColor== 'black'? '#CCCCCC' : 'black');
}

    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(6);

    const [onepage, setOnepae]=useState([]);
    const [pageNumbers, setPageNumbers]=useState([]);


    const oncheck =(data) => {
        console.log('확인' + data)
        setCurrentPage(data)
        // toggleClass()
        setTextColor('#CCCCC');

    }

    const next=() =>{
        setCurrentPage(currentPage+1)
        if (currentPage>=pageNumbers.length){
            setCurrentPage(currentPage)
        }
    }

    const prev=()=>{
        setCurrentPage(currentPage-1)
        if (currentPage<=1){
            setCurrentPage(currentPage);
        }
    }



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
            explain : '반팔인데 로고 민트 7'
        },
        {
            id: 8,
            img:<img src={cloth1}></img>,
            explain : '언제 샀는지 기억 안나  8'
        },
        {
            id: 9,
            img:<img src={cloth1}></img>,
            explain : '커버낫123 9'
        },
        {
            id: 10,
            img:<img src={cloth1}></img>,
            explain : '커버낫'
        },
        {
            id: 11,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 12,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 13,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 14,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 15,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 16,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 17,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 18,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 19,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 20,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 21,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 22,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 23,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 24,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 25,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 26,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 27,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        },
        {
            id: 28,
            img:<img src={cloth1}></img>,
            explain : '기모 긴팔 티'
        }


    ];

    useEffect(() => {
        const abc = [];
        setOnepae(list.slice( (currentPage-1)*6, (currentPage-1)*6+6))
        for (var i = 1; i <= Math.ceil(list.length / postsPerPage); i++) {
            abc.push(i);
        }
        setPageNumbers(abc)
    }, [currentPage]);
    console.log(pageNumbers)

    return(
        <div className='root'>
            <div className='fil'>
                필터
            </div>
            <hr></hr>
        <div className='mypage'>
            <div className='itemlist'>
            {
                    onepage.map((data)=>(
                        <div className='itemone' key={data.id}>
                            <div className='iteming'>{data.img}</div>
                            <div className='itemname'>{data.explain}</div>
                        </div>
                    ))
            }
            </div>
            <div className='num'>
                <img src={ArrowRight} onClick={()=>prev()} alt=''/>
                {
                    pageNumbers.map((data) => (
                        <div className='pagenumBox' key={data.id}>
                            <p onClick={()=>oncheck(data)}>{data}</p>
                        </div>
                    ))
                }
                <img src={ArrowLeft} onClick={()=>next()}alt=''/>

            </div>
        </div>

        </div>
    );
}

export default ClosetList;