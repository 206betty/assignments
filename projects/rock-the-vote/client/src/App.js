import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVote, addVote } from './redux'
import Vote from './Vote'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    }
  }
  componentDidMount() {
    this.props.getVote()
  }
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newVote = {
      title: this.state.title,
      description: this.state.description
    }
    this.props.addVote(newVote)
    this.setState({title: "", description: ""})
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
            <input type="text" 
            value={this.state.title} 
            name="title" 
            placeholder="title"
            onChange={ this.handleChange }/>
            <input type="text" 
            value={this.state.description} 
            name="description" 
            placeholder="description"
            onChange={ this.handleChange }/>
            <button>Submit</button>
        </form>
        {this.props.votes.map(vote => 
                <Vote  key={vote._id} id={vote._id} title={ vote.title } description={ vote.description }/>)}
      </div>
    )
  }
}

export default connect(state => ({votes: state}), { getVote, addVote })(App)