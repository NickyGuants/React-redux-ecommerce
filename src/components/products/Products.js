import React from "react";
import { AiOutlineShoppingCart} from 'react-icons/ai';
//import { vehicles } from "./vehicles";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decrementItem, incrementItem, removeItem } from '/home/nicky/react-ecommerce/src/redux/actions/cartActions'
import { Link } from 'react-router-dom'

const Product = () => {
    const products = useSelector((state) => state.cart.vehicles);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <section className="container">
            <div className="products">
                {products.map((vehicle) => {
                    const inCart = cartItems.find((item) => item.id === vehicle.id ? true : false);
                    const fetchQuantity = () => {
                        if (cartItems.length === 0) {
                          return 0;
                        } else {
                          return cartItems?.find((car) => car.id === vehicle.id).quantity;
                        }
                      };
                    return(
                        <div className="card" key={vehicle.id}>
                            <Link to={`/details/${vehicle.id}`}>
                            <img src={vehicle.imgSrc} alt={vehicle.name} />
                            </Link>
                            <p>{vehicle.name}</p>
                            <p>Price: ${vehicle.price}</p>
                            <p>{vehicle.description}</p>
                            {inCart ? (
                            <div className="buttons">
                                <div className="units">
                                    <button onClick={() => {
                                        if (fetchQuantity() <= 1) {
                                            dispatch(removeItem(vehicle.id));
                                        } else {
                                            dispatch(decrementItem(vehicle.id));
                                        }
                                }}>-</button>
                                    <div class="number">{fetchQuantity()}</div>
                                <button onClick={ () => dispatch(incrementItem(vehicle.id))}>+</button>  
                                </div>
                                <div>
                                    <Link to="/cart"><button>View Cart</button></Link>
                                </div>
                            </div>
                            ) : (
                            <div class="add-to-cart" >
                                <button onClick={
                                    () => dispatch(addItem(vehicle.id))
                                }><AiOutlineShoppingCart className="cart-icon" />Add to Cart </button>
                            </div>        
                          ) }    
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default Product;