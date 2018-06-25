import React from 'react'
import { deleteProgress, editProgress, addComment } from './redux'
import { connect } from 'react-redux'
// import Comment from './comment'

class progress extends React.Component {
    constructor() {
        super()
        this.state = {
            description: '',
            isToggled: false,
        }
        this.handleChange = this.handleChange.bind('this')
        this.handleSubmit = this.handleSubmit.bind('this')
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newProgress = {
            description: this.state.description
        }
        this.props.editProgress( this.props.id, newProgress)
        this.setState({isToggled:false, description: ''})
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p> { this.props.description } </p>

                <button onClick={ () => this.props.deleteProgress(this.props.id) } >Delete</button>
                <button onClick={ this.toggle } >Edit</button>
                { this.state.isToggled
                ?<form onSubmit={ this.handleSubmit }>
                    <input 
                        type="text"
                        value={ this.state.title }
                        name="title"
                        placeholder="title"
                        onChange={ this.handleChange }/>
                    <input  
                        type="text"
                        value={ this.state.description }
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

export default connect(null, { deleteProgress, editProgress, addComment })(progress)