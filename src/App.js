import React, {useState} from 'react';
// import Posts from "./components/posts/posts";
// import Ships from "./components/ships/ships";
import Users from "./components/users/users";
import Usersposts from "./components/usersPosts/usersposts";

const App = () => {
   const [userId,setUserId] = useState(null);
    return (
        <div>
            {/*<Posts/>*/}
            {/*<Ships/>*/}
            <Users setUserId={setUserId}/>
            {userId && <Usersposts userId ={userId}/>}

        </div>
    );
};

export default App;