import React from "react"
import DatePicker from "react-datepicker"
import moment from "moment"
 
import "react-datepicker/dist/react-datepicker.css"

class Date extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        startDate: moment()
      };
      this.handleChange = this.handleChange.bind('this');
    }
   
    handleChange = (date) => {
      this.setState({
        date
      });
    }
   
    render() {
      return <DatePicker
          selected={this.state.date}
          onChange={this.handleChange}
      />;
    }
  }

  export default Date;