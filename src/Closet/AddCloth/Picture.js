import React from "react";
import empty from '../../img/empty.PNG'
import './Picture.css'
import { useState, useRef } from "react";

const Picture = (props) => {
    const [imageUrl, setImageUrl] = useState(null);
    const imgRef = useRef();


    const onChangeImage = (props) => {
        const reader = new FileReader();
        const file = imgRef.current.files[0];
        console.log(file);

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
            console.log("이미지 주소", reader.result);

        };

    };

    // const onClickFileBtn=(e)=>{
    //     imgRef.current.click();
    // };

    return (
        <div className="input_image">
            <img src={imageUrl ? imageUrl : empty} alt="cimg" id="cimg"></img>
            <label for="file" ref={imgRef} onChange={() => { onChangeImage(); console.log() }}>파일 선택</label>
            <br></br>
            <input type="file" ref={imgRef} onChange={() => { onChangeImage(); }} id="file"></input>
            {/* <button onClick={()=>{
                    onClickFileBtn();
                }}
            >이미지 업로드</button> */}
        </div>
    )
}
export default Picture;
