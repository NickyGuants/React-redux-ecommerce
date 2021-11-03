import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { addItem, decrementItem, incrementItem, removeItem } from '../redux/actions/cartActions'

const ProductDetails = () => {
    const products = useSelector((state) => state.cart.vehicles);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { id } = useParams();
    const dispatch = useDispatch();

    const vehicle = products.filter((item) => item.id === Number(id))
    const inCart = cartItems.find((item) => item.id === vehicle[0].id ? true : false);

    const fetchQuantity = () => {
        if (cartItems.length === 0) {
          return 0;
        } else {
          return cartItems?.find((car) => car.id === vehicle[0].id).quantity;
        }
      };
    return (
        <section id="details-page">
            <h1 id="heading">Details</h1>
            <div id="details">
                <div id="details-image">
                    <img src={vehicle[0].imgSrc} alt={vehicle[0].name} />
                </div>
                <div className="details-text">
                    <div>
                        <p>Name: {vehicle[0].name}</p>
                        <p>Year: {vehicle[0].year}</p>
                        <p>Price: ${vehicle[0].price.toLocaleString()}</p>
                    </div>
                    <div className="details-items">
                        <div className="details-item">
                        <h4>Make</h4>
                        <p className="text-success">{vehicle[0].make}</p>
                        </div>
                        <div className="details-item">
                        <h4>Model</h4>
                        <p className="text-success">{vehicle[0].model}</p>
                        </div>
                        <div className="details-item">
                        <h4>Mileage</h4>
                        <p className="text-success">{vehicle[0].mileage}</p>
                        </div>
                        <div className="details-item">
                        <h4>Fuel</h4>
                        <p className="text-success">{vehicle[0].fuelCapacity}</p>
                        </div>
                        <div className="details-item">
                        <h4>Transmission</h4>
                        <p className="text-success">{vehicle[0].transmission}</p>
                        </div>
                        <div className="details-item">
                        <h4>Engine size</h4>
                        <p className="text-success">{vehicle[0].engineSize}</p>
                        </div>
                    </div>
                    <div>
                    {inCart ? (
                            <div className="buttons">
                                <div className="units">
                                    <button onClick={() => {
                                        if (fetchQuantity() <= 1) {
                                            dispatch(removeItem(vehicle[0].id));
                                        } else {
                                            dispatch(decrementItem(vehicle[0].id));
                                        }
                                }}>-</button>
                                    <div class="number">{ fetchQuantity()}</div>
                                <button onClick={ () => dispatch(incrementItem(vehicle[0].id))}>+</button>  
                                </div>
                                <div>
                                    <Link to="/cart"><button>View Cart</button></Link>
                                </div>
                            </div>
                            ) : (
                            <div class="add-to-cart" >
                                <button onClick={
                                    () => dispatch(addItem(vehicle[0].id))
                                }><AiOutlineShoppingCart className="cart-icon" />Add to Cart </button>
                            </div>        
                          ) } 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;