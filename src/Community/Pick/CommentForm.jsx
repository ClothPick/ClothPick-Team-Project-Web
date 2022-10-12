import React, { Component } from "react";
import './NoticeBoard/CSSClothRecommend.css'
import uuid from "react-uuid";

class CommentForm extends Component {

    state = {
        name: "",
        comment: "",
        id: uuid(),
        // info: [],
    };

    handleChange = (e) => {

        // this.setState({
        //     [e.target.name]: e.target.value,
        // });

        // 입력한 value값을 각각 name과 comment에 저장한다.
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.comment]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault(); // submit 페이지 로딩 방지

        // 댓글이 공백일 경우 경고창을 띄우도록 예외처리
        for (var key in this.state) {
            if (this.state[key].length === 0 || this.state[key] === undefined) {
                if (key === 'comment') {
                    alert('댓글을 다시 작성해주세요.')
                    return false;
                }
            }
        }

        // newcomment에 comment와 고유 값 id를 생성한다.
        let newcomment = {
            name: this.state.name,
            comment: this.state.comment,
            id: this.state.id,
            // info: this.state.info,
        };

        // addcomments에 [info, newcomment] 배열을 배열로 저장한다.
        // let addcomments = [...this.state.info, newcomment];
        // // info에 addcomments의 값을 저장하고
        // this.setState({ info: addcomments });

        // 작성될 때마다 고유 값이 변경되도록 한다.
        this.setState({ id: uuid() });

        // onCreate로 값을 모두 보낸다.
        this.props.onCreate(this.state);

        this.setState({
            //input값 빈값으로 초기화
            name: "",
            comment: "",
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
