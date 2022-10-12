import React from "react";
import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa'

function CommentTable(props) {
    const [showButton, setShowButton] = useState(false);

    const { name, comment } = props.user;

    // const handleDelete = (comment) => {
    //     const tempArr = props.user.filter(
    //         (item) => item.name !== comment.name
    //     );
    //     props.user = tempArr;
    // }

    return (
        <div className='comment' onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
            {
                showButton ?
                    <FaTrashAlt className="del-button" size='23' /> :
                    <></>
            }
            <div className="comment-text">{name}</div>
            <div className="comment-text2">{comment}</div>
        </div>
    );
}

export default CommentTable;
