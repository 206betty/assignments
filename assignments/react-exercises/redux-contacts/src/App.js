import React, { Component } from 'react';
import { connect } from "react-redux";
import {} from "./redux";


class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.updateNumber( this.state.userInput );
    this.setState({ userInput: "" })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
