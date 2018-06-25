import React from "react"

const Welcome = (props) => {
    return (
        <div className={props.uniqueStyle}>
            <h2>Title: {props.Title}</h2>
            <h3>Subtitle: {props.Artist}</h3>
            <h3>Informtion: {props.Information}</h3>
            </div>
    );
}
export default Welcome;