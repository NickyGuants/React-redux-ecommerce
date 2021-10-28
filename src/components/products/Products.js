import React from "react";
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { vehicles } from "./vehicles";

const Product =() =>{
    return (
        <section className="container">
            <div className="products">
                {vehicles.map((vehicle) =>{
                    return(
                        <div className="card">
                            <img src={vehicle.imgSrc} alt={vehicle.name} />
                            <p>{vehicle.name}</p>
                            <p>Price: ${vehicle.price}</p>
                            <p>{vehicle.description}</p>
                            <div class="add-to-cart" >
                                <button><AiOutlineShoppingCart className="cart-icon" />Add to Cart </button>
                            </div>
                            <div className="units">
                                <div class="minus">-</div>
                                <div class="number">Number</div>
                                <div class="plus">+</div>   
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default Product;