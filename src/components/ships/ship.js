import React from 'react';

const Ship = ({spaceship}) => {
    const {mission_name,launch_year} = spaceship;
    return (
        <div>
            <div>
                <div >Mission name: {mission_name}</div>
                <div >Launch year: {launch_year}</div>
                <hr/>
            </div>
        </div>
    );
};

export default Ship;