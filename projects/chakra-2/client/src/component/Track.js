import React from "react"
import { getChakra, addChakra } from "../redux"
import Progress from "../Progress"
import { connect } from 'react-redux'

class Track extends React.Component {
    constructor() {
        super();
        this.state = {
            date: "",
            description: "",
            journal: ""
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
        date: this.state.date,  
        description: this.state.description,
        journal: this.state.journal,

       }
       this.props.addChakra(newChakra)
       this.setState({description: "", date: "", journal: ""}) 
    }
    render(){
    return (
    <div className="trackPage">
       <h1 className="title">Your Journey</h1>
        <div className="notes">
            <form onSubmit={ this.handleSubmit }>
            <input type="text"
                    value={ this.state.date }
                    name="date"
                    placeholder="DATE"
                    onChange={ this.handleChange } />
                    <br></br>
                    <select name="description" value={ this.state.description}
                    onChange={this.handleChange}>
                        <option value="select"> Select </option>
                        <option value="yoga">Yoga </option>
                        <option value="meditation">Meditation</option>
                        <option value="breathWork"> Breath Work</option>
                        <option value="massage">Massage</option>
                    </select>
                    <br></br>
            <input type="text"
                    value={ this.state.journal }
                    name="journal"
                    placeholder="JOURNAL ACTIVITY"
                    onChange={ this.handleChange } />
                    <button className="submitBtn">Submit</button>
                    </form>
                    <br></br>
            {this.props.Chakra.map(chakra => 
            <Progress key={chakra._id} id={chakra._id} 
            description={ chakra.description } date={ chakra.date } journal={ chakra.journal }/>)}  
        </div>   
    </div>
    )
}
}
export default connect(state => ({Chakra: state}), { getChakra, addChakra})(Track)