import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
      
    this.state = {
      color: ""
    }
  }
  componentDidMount() {
    axios.get('http://www.colr.org/json/color/random').then(response => {
      this.setState({color: response.data.new_color})
    })
  }
  render() {

    this.style = {
      height: '300px',
      width: '300px',
      backgroundColor: `#${this.state.color}`
    }

    return (
       <h1 style={this.style}>Hola</h1>
    );
  }
}

export default App;