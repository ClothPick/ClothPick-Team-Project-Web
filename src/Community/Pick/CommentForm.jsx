import React, { Component } from "react";
import './NoticeBoard/CSSClothRecommend.css'

class CommentForm extends Component {
    state = {
        name: "",
        comment: ""
    };

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault(); // submit 페이지 로딩 방지

        // 댓글이 공백일 경우 예외처리
        for (var key in this.state) {
            if (this.state[key].length === 0 || this.state[key] === undefined) {
                if (key === 'comment') {
                    alert('댓글을 다시 작성해주세요.')
                    return false;
                }
            }
        }
        this.props.onCreate(this.state);

        this.setState({
            //input값 빈값으로 초기화
            name: "",
            comment: ""
        });
    };



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="작성자"
                />
                <div className="flex">
                    <input
                        className="box-comment"
                        name="comment"
                        onChange={this.handleChange}
                        value={this.state.comment}
                        placeholder="댓글을 입력하세요."
                    />
                    <button className='brown-round scrap' type="submit">작성</button>
                </div>
            </form>
        );
    }
}

export default CommentForm;
