import cloth1 from '../../../../img/cloth1.png';
import React from 'react';
import './ModifyPicture.css';
import { useState, useRef } from "react";

const ModifyPicture = (props) => {

    const [mimageUrl, setmoImageUrl] = useState(null);
    const imgReff = useRef();


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

    // const onClickFileBtn=(e)=>{
    //     imgRef.current.click();
    // };

    return (
        <>
            <div className="modify_image">
                <img src={mimageUrl ? mimageUrl : cloth1} alt="mimg" id="mimg"></img>
                <br></br><br></br>
                <label for="file" ref={imgReff} onChange={() => { onModifyImage(); console.log() }}>사진 변경하기</label>
                <br></br>
                <input type="file" ref={imgReff} onChange={() => { onModifyImage(); }} id="file"></input>
            </div>
            {/* <div className='modify_button'>
                <br></br>
             <label for="file" ref={imgReff} onChange={()=>{onModifyImage(); console.log()  }}>사진 변경하기</label>
             </div> */}
        </>
    )
}
export default ModifyPicture;