import React from "react";

const Enemy = (props) => {
    return (
        <div>
        <h1 className="eName">{props.name}</h1>
        <img className="ePic" src={props.image}/>
      </div>
    )
}
export default Enemy;