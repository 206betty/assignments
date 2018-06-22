import React from "react";
import { Link } from "react-router-dom";

    const Navbar = (props) => {
    return (
        <div>
        <div>
            <img className="banner" src="https://solsticeenergyhealing.files.wordpress.com/2017/07/chakrabanner.jpg?w=1086" alt="banner"/>
        </div>
        <div className="nav">
                <Link className="home" to="/">Home</Link>
                <Link className="seven" to="/seven">The 7 Chakras</Link>
                <Link className="track" to="/track">Track Your Progress</Link>
        </div>
        </div>
    )
}
export default Navbar;