import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

    function Navbar (props) {
    return (
        <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/Quote Queue">Quote Queue</Link>
                <Link to="/Favorites">Favorites</Link>
        </div>
    )
}
export default Navbar;