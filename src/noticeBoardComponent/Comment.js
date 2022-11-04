import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import { FaTrashAlt } from 'react-icons/fa'

import "./Comment.css"


function Comment() {
    const [info, setInfo] = useState({
        name: "",
        comment: "",
        id: uuid().split("-")[0],
    })

    const [showButton, setShowButton] = useState(false); // 삭제 버튼
    const [users, setUsers] = useState([]) // 댓글 추가 배열

    const handleChange = (e) => {
        // 입력한 value값을 각각 name과 comment에 저장한다.
        // console.log(e.target.value);
        console.log(e.target.name);

        if (e.target.name === "name") {
            setInfo({
                ...info,
                [e.target.name]: e.target.value,
            });
        }
        else if (e.target.name === "comment") {
            setInfo({
                ...info,
                [e.target.name]: e.target.value,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // submit 페이지 로딩 방지

        // 댓글이 공백일 경우 경고창을 띄우도록 예외처리
        if (info.comment.length === 0 || info.comment === undefined) {
            alert("댓글을 작성해주세요.");
            return false;
        }
        else {
            setUsers(users.concat(info));
            console.log(info);
            alert("작성되었습니다.");
        }

        setInfo({
            ...info,
            name: "",
            comment: "",
            id: uuid().split("-")[0],
        })
    }

    // const ReComment = () => {
    //     return (
    //         <form onSubmit={(e) => handleSubmit(e)}>
    //             <input
    //                 name="name"
    //                 onChange={(e) => handleChange(e)}
    //                 value={info.name}
    //                 placeholder="작성자"
    //             />
    //             <div className="flex">
    //                 <input
    //                     className="box-comment"
    //                     name="comment"
    //                     onChange={(e) => handleChange(e)}
    //                     value={info.comment}
    //                     placeholder="댓글을 입력하세요."
    //                 />
    //                 <button className='brown-round scrap' type="submit">작성</button>
    //             </div>
    //         </form>
    //     );
    // }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    name="name"
                    onChange={(e) => handleChange(e)}
                    value={info.name}
                    placeholder="작성자"
                />
                <div className="flex">
                    <input
                        className="box-comment"
                        name="comment"
                        onChange={(e) => handleChange(e)}
                        value={info.comment}
                        placeholder="댓글을 입력하세요."
                    />
                    <button className='brown-round scrap' type="submit">작성</button>
                </div>
            </form>

            <div>
                {users && users.map((user =>
                    <div key={user.id} >
                        <div className="comment" onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
                            {
                                showButton ? <FaTrashAlt className="del-button" size='23' /> : <></>
                            }
                            <div className="comment-text">{user.name}</div>
                            <div className="comment-text2">{user.comment}</div>
                            <div className="comment-time">2022-10-12 04:26:15</div>
                            <button className="comment-btn">답글</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comment;