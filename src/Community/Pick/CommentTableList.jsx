import React, { Component } from "react";
import CommentTable from "./CommentTable";

class CommentTableList extends Component {
    render() {
        const { users } = this.props;
        return (
            <>
                {users && users.map((user) => <CommentTable key={user.id} user={user} />)}
            </>
        );
    }
}

export default CommentTableList;
