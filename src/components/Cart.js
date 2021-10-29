import React from "react";
import '../App.css';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <section id="cart-order">
                
                <div className="cart">
                    <div className="heading">
                        <div><h2>Shopping cart</h2></div>
                            <div><h2>{ cartItems.length}</h2></div>
                        </div>
                    <div className="table">
                        <table>
                            <tr>
                                <th>Product Details</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Total</th>
                        </tr>
                        {cartItems.map((item) => (
                            <tr>
                                <td><img src={item.imgSrc} alt="" width="100px" /></td>
                                <td>2</td>
                                <td>${item.price}</td>
                                <td>$0</td>
                                <td>$4000</td>
                            </tr>
                        ))}
                        </table>
                        <div>
                            <a href="#home">Continue shopping</a>
                        </div>
                    </div>
                </div>
                <div className="order">
                    <div>
                        <h1>Order Summary</h1>
                    </div>
                    <div><button>Checkout</button></div>
                    </div>
        </section>
    )
}

export default Cart;