import React, {useEffect, useState} from 'react';
import axios from "axios";
import Userspost from "./userspost";

const Usersposts = ({userId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.data).then(value => setPosts(value))
    }, [userId])
    return (
        <div>
            {posts.map(post => <Userspost key={post.id} post={post}/>)}
        </div>
    );
};

export default Usersposts;