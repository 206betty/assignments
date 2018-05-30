import React from "react";
import { connect } from 'react-redux';

const Quotes = () => {
    console.log(this.props.data.quoteText)
        return (
            <div className="q">
                <h3 className="quote"> { this.props.data.quoteText } </h3>
                <h3 className="by">By: { this.props.data.quoteAuthor } </h3>
            </div>
        )
    
}
    export default Quotes;