import React from 'react'
import { deleteVote, editVote } from './redux'
import { connect } from 'react-redux'

class Vote extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            isToggled: false 
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        const newVote = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.editVote( this.props.id, newVote)
        this.setState({ isToggled:false, title: '', description: ''})
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                istoggled: !prevState.isToggled
            }
        })
    }

    render() {
        console.log(this.toggle)
    return (
        <div> 
          <h1>  { this.props.title } </h1>
          <p> { this.props.description } </p>
          <button onClick={ ()=> this.props.deleteVote(this.props.id) }>Delete</button>
          <button onClick={ this.toggle } >Edit</button>
          { this.state.isToggled
            ? <form onSubmit={ this.handleSubmit } >
                        <input 
                            type="text" 
                            value={ this.state.title } 
                            name="title" 
                            placeholder="title"
                            onChange={ this.handleChange }/>
                        <input 
                            type="text" 
                            value={this.state.description} 
                            name="description" 
                            placeholder="description"
                            onChange={ this.handleChange }/>
                        <button>Submit</button>
                    </form>
                    : null
          }
          </div>
        )
    }
}

export default connect(null, { deleteVote, editVote })(Vote)