import React from "react";
import { AiOutlineShoppingCart} from 'react-icons/ai';
//import { vehicles } from "./vehicles";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decrementItem, incrementItem, removeItem } from '/home/nicky/react-ecommerce/src/redux/actions/cartActions'
import { Link } from 'react-router-dom'

const SearchResults = () => {
    const searchResults = useSelector((state) => state.cart.searchedCars);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    console.log("h");

    return (
        <section className="container">
            <div className="products">
                {searchResults.map((vehicle) => {
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
                            <p>Model: {vehicle.make}</p>
                            <p>Make: {vehicle.model}</p>
                            <p>Price: ${vehicle.price}</p>
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
                                
                            <Link to={`/details/${vehicle.id}`}><button>View Details</button></Link>
                            </div>        
                          ) }    
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default SearchResults;