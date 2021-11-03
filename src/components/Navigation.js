import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import Search from "./Search";

const Navigation = () =>{
    return(
        <div>
            <header>
                <div>
                    <h1>Pearl Shine Motors</h1>
                </div>
                <Search />
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/cart">CART</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;
