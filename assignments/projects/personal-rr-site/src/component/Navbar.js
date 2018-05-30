import React from "react";
import { Link } from "react-router-dom";

    const Navbar = (props) => {
    return (
        <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/quotes">Quote Queue</Link>
                <Link to="/favorites">Favorites</Link>
        </div>
    )
}
export default Navbar;