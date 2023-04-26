import React, {useEffect, useState} from 'react';
import axios from "axios";
import Ship from "./ship";

const Ships = () => {
    const [spaceships,setSpaceships] = useState([]);
 useEffect( ()=> {
     axios('https://api.spacexdata.com/v3/launches').then(value => value.data).then(value => {
         const filter = value.filter(value => value.launch_year != "2020");
         setSpaceships(filter)
     })
 },[]);
    return (
        <div>
            {spaceships.map((spaceship) => <Ship key={'flight_number'} spaceship={spaceship}/>)}
        </div>
    );
};

export default Ships;