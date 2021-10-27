import React from "react";
import '../App.css';

const Navigation = () =>{
    return(
        <div>
            <header>
                <div>
                    <h1>Pearl Shine Motors</h1>
                </div>
                <nav>
                    <a href="#home">HOME</a>
                    <a href="#products">PRODUCTS</a>
                    <a href="#search">SEARCH</a>
                    <a href="#cart">CART</a>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;
