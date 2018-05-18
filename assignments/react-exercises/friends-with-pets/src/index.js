import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";

const App = (props) => {
    return (
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
    )
}
export default App;