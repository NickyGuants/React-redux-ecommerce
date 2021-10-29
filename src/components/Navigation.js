import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'

const Navigation = () =>{
    return(
        <div>
            <header>
                <div>
                    <h1>Pearl Shine Motors</h1>
                </div>
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
