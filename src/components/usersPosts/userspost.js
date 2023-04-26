import React from 'react';

const Userspost = ({post}) => {
    const [id,title,body,userId] = {post};
    return (
        <div>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <div> body: {body}</div>
            <div> userId: {userId}</div>
        </div>
    );
};

export default Userspost;