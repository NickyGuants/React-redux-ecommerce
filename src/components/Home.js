import React from "react";
import Product from "./products/Products";
import Hero from "./hero/Hero";
import { SliderData } from "./hero/SliderData";


const Home = () => {
    return (
        <div className="home">
            <Hero slides={SliderData}/>
            <Product /> 
        </div>
    )
}

export default Home;