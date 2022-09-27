import React, { Component } from "react";
import CommentForm from "./CommentForm";
import CommentTableList from "./CommentTableList";

class Comment extends Component {
    id = 0;

    state = {
        users: []
    };

    handleCreate = (data) => {
        this.setState({
            users: this.state.users.concat({
                ...data,
                id: this.id++
            })
        });
        console.log(data);
    };
    render() {
        return (
            <>
                <CommentForm onCreate={this.handleCreate} />
                <CommentTableList users={this.state.users} />
            </>
        );
    }
}

export default Comment;
