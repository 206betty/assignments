import React from 'react'
import { connect } from 'react-redux'
import { getShow, addShow } from './redux'
import Shows from './Shows'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            comments: {
                name: '',
                body: ''
            }
        }
    }
    componentDidMount() {
        this.props.getShow()
    }
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newShow = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.addShow(newShow)
        this.setState({ title: '', description: '', comments:{ name: '', body: ''}})
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        type="text"
                        value={ this.state.title }
                        name="title"
                        placeholder="title"
                        onChange={ this.handleChange } />
                    <input 
                        type="text"
                        value={ this.state.description }
                        name="description"
                        placeholder="description"
                        onChange={ this.handleChange } />
                        <button>Submit</button>
                        </form>
                {this.props.shows.map(show => 
                <Shows key={show._id} id={show._id} 
                title={ show.title } description={ show.description }
                comments={ show.comments} />)}
                
            </div>
        )
    }
}

export default connect(state => ({shows: state}), { getShow, addShow}) (App)