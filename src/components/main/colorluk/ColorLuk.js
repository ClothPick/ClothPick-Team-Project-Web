import React , { useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import ResourMethod from "../../../apis/ResourcesMethod";
import './ColorLuk.css'

const ColorLuk = () => {
    const [blockcheck1 , setBlockCheck1] = useState(false);
    const [checks, setCheck] = useState(true);
    const [lukcolorimglist, setLukColorImgList] = useState([]);
    const [lukcolor, setLukColor] = useState('')
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
        const get = ResourMethod.ColorLukList();
        const getData = () => {
            get.then(data => {
            for(let i=0; i<data.length; i++){
                setLukColor(data[0].slice(0, -5));
                setLukColorImgList(lukcolorimglist => [...lukcolorimglist, `http://192.168.0.101:8087/api/v1/displayimg/resources/lukcolor/${data[0].slice(0, -5)}/${data[i]}`])
            }

            });
        };
        getData();
        setCheck(false)
    }
    console.log('z')
    }, [checks]);

    return(
    <div className="ColorLuk_Component">
        <h2 className="ColorLuk_Title">오늘의 행운의 색깔 #( {lukcolor} )</h2>
        <Slider {...settings}>
            {
                lukcolorimglist && lukcolorimglist.map((data, index) => (
                <div className="ColorLuk_Imgbox" key={index}>
                    <img src={data} alt="" className="ColorLuk_Imgblock" />

                 </div>
                ))
            }
        </Slider>
    </div>
    )
}
export default ColorLuk;