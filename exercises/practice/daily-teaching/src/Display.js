import React from 'react';

const Display = (props) => {
    let phrase;

    switch(props.phrase){
        case "am":
            phrase = <h1>Good Morning</h1>
            break;
        case "pm":
            phrase = <h1>Goodnight</h1>
            break;
        default:
            phrase = <h1>Just Hush</h1>
    }
    
    return (
        <div>
           { phrase }
        </div>
    )
}

export default Display