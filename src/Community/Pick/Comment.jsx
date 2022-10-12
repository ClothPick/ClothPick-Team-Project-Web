import React from "react";
import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentTableList from "./CommentTableList";

function Comment() {
    // const [id, setId] = useState(0);

    const [users, setUsers] = useState([])

    const handleCreate = (data) => {
        // setId(id + 1);
        // setUsers(users.concat(data, id));
        setUsers(users.concat(data));

        console.log(data);
        // console.log(id);
    };
    return (
        <>
            <CommentForm onCreate={handleCreate} />
            <CommentTableList users={users} />
        </>
    );
}

export default Comment;