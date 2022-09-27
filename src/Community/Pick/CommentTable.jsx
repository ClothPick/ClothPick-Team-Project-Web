import React, { Component } from "react";

class CommentTable extends Component {
    render() {
        const { name, comment } = this.props.user;
        return (
            // <div className='comment-box'>
            <div className='comment'>
                <div className="comment-text">{name}</div>
                <div className="comment-text2">{comment}</div>
            </div>
            // </div >
        );
    }
}

export default CommentTable;
