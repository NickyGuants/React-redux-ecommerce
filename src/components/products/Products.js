import React from "react";
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
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default Product;