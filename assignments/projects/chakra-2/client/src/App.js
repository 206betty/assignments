import React, { Component } from "react"
// import { connect } from "react-redux"

import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./component/Home"
import Seven from "./component/Seven"
import Track from "./component/Track"

import { Route, Switch } from "react-router-dom"


class App extends Component {
    render() {
        console.log(this.props)
        return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/seven' component={Seven}/>
                <Route path='/track' component={Track}/>
            </Switch>
            <Footer/>
         </div>              
        )
    }
}

export default App