import React from "react";
import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa'

function CommentTable(props) {
    const [showButton, setShowButton] = useState(false);

    const { name, comment } = props.user;
    return (
        <div className='comment' onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
            {
                showButton ?
                    <FaTrashAlt className="del-button" size='23' /> :
                    <span></span>
            }
            <div className="comment-text">{name}</div>
            <div className="comment-text2">{comment}</div>

        </div>
    );
}

export default CommentTable;
