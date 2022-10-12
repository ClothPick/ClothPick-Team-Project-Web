import React from "react";
import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentTableList from "./CommentTableList";

function Comment() {
    const [users, setUsers] = useState([])

    const handleCreate = (data) => {
        setUsers(users.concat(data));
        console.log(data);
    };
    return (
        <>
            <CommentForm onCreate={handleCreate} users={users} />
            {/* <CommentTableList users={users} /> */}
        </>
    );
}

export default Comment;