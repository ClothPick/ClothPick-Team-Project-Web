// import cloth1 from '../../../../img/cloth1.png';
import React, { useEffect } from 'react';
import './ModifyPicture.css';
import { useState, useRef } from "react";
import ClosetMethod from '../../../../Test/ClosetMethod';

const ModifyPicture = (props) => {

    var url = window.location.pathname.split("/")[2];
    // console.log("url:", url);

    const [mimageUrl, setmoImageUrl] = useState(null);
    const [click, setClick] = useState(true);
    const imgReff = useRef();
    const [clothImg, setClothImg] = useState([]);
    const [img, setImg] = useState([]);


    const onModifyImage = (props) => {
        const read = new FileReader();
        const mfile = imgReff.current.files[0];
        console.log(mfile);

        read.readAsDataURL(mfile);
        read.onloadend = () => {
            setmoImageUrl(read.result);
            console.log("이미지 주소", read.result);

        };

    };

    useEffect(() => {
        const get = ClosetMethod.ConnectClosetImgGet();
        const getData = () => {
            get.then(data => {
                setClothImg(data);
                console.log(data);

                for (var i = 0; i < data.length; i++) {
                    if (url === data[i].clothImgName) {
                        setImg(data[i].clothImgName);
                        // console.log(data[i].clothImgName);
                    }
                }
            })
        };
        getData();
    }, [click])


    return (
        <>
            <div className="modify_image">
                <img src={`http://192.168.0.101:8080/api/v1/displayimg/closet/${img}`} alt="" id="mimg"></img>
                <br></br><br></br>
                <label for="file" ref={imgReff} onChange={() => { onModifyImage(); console.log() }}>사진 변경하기</label>
                <br></br>
                <input type="file" ref={imgReff} onChange={() => { onModifyImage(); }} id="file"></input>
            </div>
        </>
    )
}
export default ModifyPicture;