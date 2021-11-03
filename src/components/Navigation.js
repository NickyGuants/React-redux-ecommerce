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
                    <Link to="/">HOME</Link>
                    <Link to="/cart">CART</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;
