// import React from "react";
// import { useState } from "react";
// import { FaTrashAlt } from 'react-icons/fa'
// import "./NoticeBoard/CSSClothRecommend.css"



// // -------------------------------------------

// function CommentTableList(props) {
//     const { users } = props;

//     // console.log("users : " + JSON.stringify(users));
//     // console.log("users[0] : " + JSON.stringify(users[0]));
//     // console.log("0번째 아이디 : " + JSON.stringify(users[0].id));

//     const [showButton, setShowButton] = useState(false);

//     const handleRemove = (id) => {
//         const _comments = users.filter((key) => key.id !== id);
//         console.log(_comments, users, id);

//         this.setState({
//             users: _comments,
//         });
//     };

//     return (
//         <>
//             {users && users.map((user =>
//                 <div key={user.id} >
//                     <div className="comment" onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
//                         {
//                             // showButton ? <FaTrashAlt className="del-button" size='23' /> : <></>
//                             showButton ? <FaTrashAlt className="del-button" size='23' onClick={handleRemove(user.id)} /> : <></>
//                         }
//                         <div className="comment-text">{user.name}</div>
//                         <div className="comment-text2">{user.comment}</div>
//                         <div className="comment-time">2022-10-12 04:26:15</div>
//                         <button className="comment-btn">답글</button>
//                     </div>
//                 </div>))}
//         </>
//     );
// }

// export default CommentTableList;
