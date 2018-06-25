import React from "react";
import Navbar from "./Navbar";
import Infosection from "./Infosection";
import Listproducts from "./Listproducts";
import Images from "./Images";
import Footer from "./Footer";

import "./index.css";


const App = () => {
    return(
        <div className = "whole">
        <div>
            <Navbar />
            <Infosection />
            <Listproducts />
            <Images />
            <Footer />
        </div>
        </div>
    )
}
export default App;