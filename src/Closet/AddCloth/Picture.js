// import React from "react";
// import empty from '../../img/empty.PNG'
// import './Picture.css'
// import { useState } from "react";

// const Picture = () => {
//     const [imageUrl, setImageUrl] = useState(null);


//     const onChangeImage = async (e) => {
//         const reader = new FileReader();

//         const file = e.target.files[0];
//         console.log(file);

//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             setImageUrl(reader.result);
//             // console.log("이미지 주소", reader.result);
//         };


//     };

//     return (
//         <form method="post" action="/api/v1/closetimgupload" encType="multipart/form-data">
//             <div className="input_image">
//                 <img src={imageUrl ? imageUrl : empty} alt="cimg" id="cimg"></img>
//                 <label htmlFor="file" name="file" onChange={(e) => { onChangeImage(e); console.log() }}>파일 선택</label>
//                 <br></br>
//                 <input type="file" name="file" onChange={(e) => { onChangeImage(e); }} id="file"></input>

//             </div>
//         </form>
//     )
// }
// export default Picture;
