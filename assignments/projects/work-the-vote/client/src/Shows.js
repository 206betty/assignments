import React from 'react'
import { deleteShow, editShow, addComment } from './redux'
import { connect } from 'react-redux'
import Comment from './Comment'

class Shows extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            isToggled: false,
            isTogg: false,
            comments: {
                name:"",
                body: ''
            }

        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newShow = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.editShow( this.props.id, newShow)
        this.setState({ isTogg:false, isToggled:false, title: '', description: '', comments: { name:'', body:''}})
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
                <h1> { this.props.title} </h1>
                <p> { this.props.description } </p>

     
                <div> { this.props.comments.map(comment => 
                    <Comment key={comment._id} id={comment._id}
                    name={comment.name} body={comment.body}
                   /> )}

                <button onClick={ () => this.props.deleteShow(this.props.id) } >Delete</button>
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
            </div>
        )
    }

}

export default connect(null, { deleteShow, editShow, addComment })(Shows)