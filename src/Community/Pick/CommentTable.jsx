// import React from "react";
// import { useState } from "react";
// import { FaTrashAlt } from 'react-icons/fa'
// import "./NoticeBoard/CSSClothRecommend.css"

// function CommentTable(props) {
//     const [showButton, setShowButton] = useState(false);

//     const { name, comment, id } = props.user;
//     // console.log("id : " + id);

//     // console.log(props.user);

//     // console.log("name : " + name);
//     // console.log("comment : " + comment);

//     const handleDelete = (id) => {
//         const _comments = props.user.filter(
//             comment => comment.id !== id
//         );
//         console.log(_comments, id);
//         props.user = _comments;
//     }

//     return (
//         <div className='comment' onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
//             {
//                 showButton ?
//                     // <FaTrashAlt className="del-button" size='23' onClick={handleDelete(id)} /> :
//                     <FaTrashAlt className="del-button" size='23' /> :
//                     <></>
//             }
//             <div className="comment-text">{name}</div>
//             <div className="comment-text2">{comment}</div>
//             <div className="comment-time">2022-10-12 03:27:16</div>
//             <button className="comment-btn">답글</button>
//         </div>
//     );
// }

// export default CommentTable;
