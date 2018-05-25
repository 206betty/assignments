import React from 'react';

function Pidgeon(props) {
    const {nickname, imgURL, deletePidgeon, index} = props;
    return (
        <div>
            <h3>{nickname}</h3>
            <img src={imgURL} alt=""/>
            <button onClick={()=>deletePidgeon(index)}>Delete</button>
        </div>
    )
}

export default Pidgeon;