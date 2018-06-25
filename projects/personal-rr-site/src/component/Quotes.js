import React from "react";
import { connect } from 'react-redux';
import { getData } from "../redux";
import { withRouter } from "react-router-dom";



class Quotes extends React.Component {
    componentDidMount(){
        this.props.getData()
    }
    render(){
        const refreshPage = () => {
            window.location.reload();
        }

        console.log(this.props.data.quoteText)
        return (
    <div>
            <div className="q">   
                <h3 className="quote"> { this.props.data.quoteText } </h3>
                <h3 className="by">By: { this.props.data.quoteAuthor } </h3>
                <button type="submit" onClick={refreshPage} className="button" >New Quote</button>
            </div>
    </div>
        )
    }
}
export default withRouter (connect(state=>state, { getData })(Quotes));