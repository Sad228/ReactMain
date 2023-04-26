import React from 'react';

const Post = ({post,setPost}) => {
    const {id,title} = post;
    return (
        <div>
            <div>
                <div >id: {id}</div>
                <div >title: {title}</div>
                <button onClick={() => setPost(post)}>info</button>
                <hr/>
            </div>
        </div>
    );
};

export default Post;