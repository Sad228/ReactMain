import React from 'react';

const Character = ({character}) => {
    const {id,name,status,species,gender,image} = character;
    return (
        <div className={'main'}>
            <div className={'name'}>id: {id}</div>
            <div className={'name'}>name: {name}</div>
           <div className={'infoAndPhoto'}> <div className={'info'}>status: {status}</div>
            <div className={'info'}>species: {species}</div>
            <div className={'info'}>gender: {gender}</div>
               <div className={'photo2'}><img src={image} alt={'foto'} /></div>
           </div>
        </div>
    );
};

export default Character;
export {Character};