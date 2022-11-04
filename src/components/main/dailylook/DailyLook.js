import React, { useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import ResourMethod from "../../../apis/ResourcesMethod";
import './DailyLook.css'

const DailyLook = () => {
    const [blockcheck1 , setBlockCheck1] = useState(false);
    const [checks, setCheck] = useState(true);
    const [dailyimglist, setDailyImgList] = useState([]);
    const [dailykeyword, setDailyKeyWord] = useState('');
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 2500

    };

    React.useEffect(() => {
        if(checks){
        const get = ResourMethod.DailyList();
        const getData = () => {
            get.then(data => {
            for(let i=0; i<data.length; i++){
                setDailyKeyWord(data[0].slice(0, -5));
                setDailyImgList(dailyimglist => [...dailyimglist, `http://192.168.0.101:8087/api/v1/displayimg/resources/daily/${data[0].slice(0, -5)}/${data[i]}`])
            }

            });
        };
        getData();
        setCheck(false)
    }
    console.log('z')
    }, [checks]);

    return(
    <div className="Dailylook_Component">
        <h2 className="Dailylook_Title">오늘의 추천 데일리 룩 #"{dailykeyword}"</h2>
        <Slider {...settings}>
            {
                dailyimglist && dailyimglist.map((data, index) => (
                <div className="Dailylook_Imgbox" onMouseOver={()=>setBlockCheck1(true)}  onMouseOut={()=>{setBlockCheck1(false)}} key={index}>
                    <img src={data} alt="" className="Dailylook_Imgblock" />
                    {
                        blockcheck1 ?
                        <div className="Dailylook_Textbox">
                            <p className="Dailylook_TextTitle">옷 테마</p>
                            <p className="Dailylook_TextInfo">옷 d내용</p>
                            <p>{index}</p>
                        </div> : <span></span>
                    }

                 </div>
                ))
            }
        </Slider>
    </div>
    )
}
export default DailyLook;