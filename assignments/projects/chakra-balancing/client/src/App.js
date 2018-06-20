import React from 'react'
import { connect } from 'react-redux'
import { getProgress, addProgress } from './redux'
import Date from './date'
import Progress from './progress'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            description: ''
        }
    }
    componentDidMount() {
        this.props.getProgress()
    }
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newProgress = {
            description: this.state.description
        }
        this.props.addProgress(newProgress)
        this.setState({description: ''})
    }

    render() {
        console.log(this.props)
        return (
        <div>
            <div>
                <Date />
                <select>
                    <option value="Yoga">Yoga</option>
                    <option value="Massage">Massage</option>
                    <option value="Meditation">Meditation</option>
                    <option value="Breath Work">Breath Work</option>
                </select>  
            </div>
            <div>
                <form onSubmit={ this.handleSubmit }>
                    {/* <input 
                        type="text"
                        value={ this.state.title }
                        name="title"
                        placeholder="title"
                        onChange={ this.handleChange } /> */}
                    <input 
                        type="text"
                        value={ this.state.description }
                        name="description"
                        placeholder="Journal Your Progress"
                        onChange={ this.handleChange } />
                        <button>Submit</button>
                        </form>
                        <h3> { this.props.description } </h3>
                {this.props.Progress.map(progress => 
                <Progress key={progress._id} id={progress._id} 
                description={ progress.description }/>)}  
            </div>
        </div>
        )
    }
}

export default connect(state => ({Progress: state}), { getProgress, addProgress}) (App)