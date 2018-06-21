import React from 'react'
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Quotes from "./component/Quotes";
import Favorites from "./component/Favorites";

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/quotes" component={ Quotes }/>
                <Route path="/favorites" component={ Favorites }/>
            </Switch>
            <Footer />
        </div>
        )
}
export default App;