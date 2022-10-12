import React from "react";
import CommentTable from "./CommentTable";

function CommentTableList(props) {
    const { users } = props;
    console.log(users);
    return (
        <>
            {users && users.map((user =>
                <div key={users.id} >
                    <CommentTable user={user} />
                </div>))}
        </>
    );
}

export default CommentTableList;
