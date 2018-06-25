import React from "react";
import { Link } from "react-router-dom";

    const Navbar = (props) => {
    return (
        <div className="nav">
                <Link className="ya" to="/">Home</Link>
                <Link className="ya" to="/quotes">Quote Queue</Link>
                <Link className="ya" to="/favorites">Favorites</Link>
        </div>
    )
}
export default Navbar;