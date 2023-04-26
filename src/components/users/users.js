import React, {useEffect, useState} from 'react';
import axios from "axios";
// import user from "./user";
import User from "./user";


const Users = ({setUserId}) => {
    const [users,setUsers] = useState([]);

    useEffect( () => {
        axios('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers(value))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export default Users;