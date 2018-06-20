import React from "react";
import { Link } from "react-router-dom";

    const Navbar = (props) => {
    return (
        <div className="nav">
                <Link className="home" to="/">Home</Link>
                <Link className="seven" to="/seven">The 7 Chakras</Link>
                <Link className="track" to="/track">Track Your Progress</Link>
        </div>
    )
}
export default Navbar;