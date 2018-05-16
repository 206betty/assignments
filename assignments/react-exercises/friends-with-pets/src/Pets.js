import React from "react";

const Pets = (props) => {

    return(
        <div>
            <p>{props.name}, {props.breed}</p>
        </div>
    );
}
export default Pets;