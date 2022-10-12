import React, { Component } from "react";
import './NoticeBoard/CSSClothRecommend.css'
import uuid from "react-uuid";
import { FaTrashAlt } from 'react-icons/fa'

class CommentForm extends Component {

    state = {
        name: "",
        comment: "",
        id: uuid(),
        showButton: false,
    };


    handleChange = (e) => {
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

        // 작성될 때마다 고유 값이 변경되도록 한다.
        this.setState({ id: uuid() });

        // onCreate로 값을 모두 보낸다.
        this.props.onCreate(this.state);

        this.setState({
            //input값 빈값으로 초기화
            name: "",
            comment: "",
        });

        console.log("값 : " + JSON.stringify(this.state));

    };

    render() {
        const { users } = this.props;

        return (
            <>
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

                <div>
                    {users && users.map((user =>
                        <div key={user.id} >
                            <div className="comment" onMouseOver={() => this.setState({ showButton: true })} onMouseOut={() => this.setState({ showButton: false })}>
                                {
                                    this.showButton ? <FaTrashAlt className="del-button" size='23' /> : <></>
                                    // this.showButton ? <FaTrashAlt className="del-button" size='23' onClick={handleRemove(user.id)} /> : <></>
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
}

export default CommentForm;
