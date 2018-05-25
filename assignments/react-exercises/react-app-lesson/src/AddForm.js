import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPidgeon} from './redux';


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                nickname: '',
                imgURL: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        //call addPidgeon() from here
        this.props.addPidgeon(this.state.inputs);
    }

    render(){
        const {inputs: {nickname, imgURL}} = this.state;
        console.log(this.state.inputs);
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="nickname" type="text" placeholder="Enter Nickname" value={nickname} onChange={this.handleChange}/>
                <input name="imgURL" type="text" placeholder="Image URL" value={imgURL} onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addPidgeon })
(AddForm);

