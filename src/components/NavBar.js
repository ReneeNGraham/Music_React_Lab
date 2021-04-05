import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (

        <div className="nav-bar">
            <h1> ITunes Music Chart </h1>
            <ul>
               
                <li><Link to="/">Home </Link> </li>
                <li><Link to="/songs"> Song Selector </Link> </li>

    
            </ul>
        </div>

    )
}


export default NavBar;