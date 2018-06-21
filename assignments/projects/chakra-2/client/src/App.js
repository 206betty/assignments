import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./component/Home"
import Seven from "./component/Seven"
import Track from "./component/Track"

class App extends Component {
 
    render() {
        console.log(this.props)
        return (
        <div>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Seven' component={Seven}/>
                <Route path='/Track' component={Track}/>
            </Switch>
            <Footer/>
         </div>              
      
        </div>
        )
    }
}

export default connect(state => state)(App)