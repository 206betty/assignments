import React from "react"
import Date from "../Date"
import { getChakra, addChakra } from "../redux"
import Progress from "../Progress"
import { connect } from 'react-redux'

class Track extends React.Component {
    constructor() {
        super();
        this.state = {
            description: ""
        }
    }
    componentDidMount() {
        this.props.getChakra()
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const newChakra = {
           description: this.state.description 
       }
       this.props.addChakra(newChakra)
       this.setState({descrition: ""}) 
    }
    render(){
    return (
    <div>
    <div className="date">
            <Date />
        </div>
        <div className="dropbox">
            <select>
                    <option value="0">Yoga</option>
                    <option value="1">Massage</option>
                    <option value="2">Meditation</option>
                    <option value="3">Breath Work</option>
            </select>  
        </div>
        <div className="journal">
            <form onSubmit={ this.handleSubmit }>
            <input type="text"
                    value={ this.state.description }
                    name="description"
                    placeholder="Journal Your Progress"
                    onChange={ this.handleChange } />
                    <button>Submit</button>
                    </form>
                    <h3> { this.props.description } </h3>
            {this.props.Chakra.map(chakra => 
            <Progress key={chakra._id} id={chakra._id} 
            description={ chakra.description }/>)}  
        </div>   

    </div>
    )
}
}
export default connect(state => ({Chakra: state}), { getChakra, addChakra})(Track)