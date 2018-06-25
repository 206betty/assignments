import React, { Component } from 'react';
import axios from "axios";
import Enemy from "./Enemy";
import "./index.css";


class App extends Component {
  constructor(){
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
      this.setState({data: response.data})
    })
  }
  render() {
    const mappedhitList = this.state.data.map(enemy => {
      return (
        <Enemy name={enemy.name} image={enemy.image}/>
      )
    })
    return (
      <div className="mainContent">
        {mappedhitList}
      </div>
    );
  }
}

export default App;
