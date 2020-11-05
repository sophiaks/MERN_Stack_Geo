import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h1><Link to ="/">GEOYAMA</Link></h1>
            <ul>
                <li>
                    <Link to="/login">LOGIN</Link> 
                </li>
                <li>
                    <Link to="/cadastro">CADASTRO</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar