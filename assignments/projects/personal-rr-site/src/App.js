import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './redux'
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Quotes from "./component/Quotes";
import Zend from "./component/Zend";

class App extends Component {
    componentDidMount(){
        this.props.getData()
    }

    render(){
        console.log(this.props.data.quoteText)
        return (
            <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/quotes" component={ Quotes }/>
                <Route path="/zend" component={ Zend }/>
            </Switch>
            <Footer />
            </div>
        )
    }
}
export default connect(state=>state, { getData })(App);