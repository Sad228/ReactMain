import React from 'react';

const Simpson = ({simpson}) => {
    const {id,name,surname,age,info,photo} = simpson;
    return (
        <div className={'main'}>
                <div>
                    <div className={'name'}><h2> {id} {name} {surname}, age {age}</h2></div>
                <div className={'infoAndPhoto'}>
                    <div className={'info'}>{info}</div>
                    <div className={'photo'}><img src={photo} alt={'foto'}/></div>
                </div>
              </div>
        </div>
    );
};

export default Simpson;
export {Simpson};