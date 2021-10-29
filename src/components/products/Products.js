import React from "react";
import { AiOutlineShoppingCart} from 'react-icons/ai';
//import { vehicles } from "./vehicles";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '/home/nicky/react-ecommerce/src/redux/actions/cartActions'
import { Link } from 'react-router-dom'

const Product = () => {
    const  products  = useSelector((state) => state.cart.vehicles);
    const dispatch = useDispatch();

    return (
        <section className="container">
            <div className="products">
                {products.map((vehicle) =>{
                    return(
                        <div className="card" key={vehicle.id}>
                            <Link to={`/details/${vehicle.id}`}>
                            <img src={vehicle.imgSrc} alt={vehicle.name} />
                            </Link>
                            <p>{vehicle.name}</p>
                            <p>Price: ${vehicle.price}</p>
                            <p>{vehicle.description}</p>
                            <div class="add-to-cart" >
                                <button onClick={()=>dispatch(addItem(vehicle.id))}><AiOutlineShoppingCart className="cart-icon" />Add to Cart </button>
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