import React from "react";

const Cart = () => {
    return (
        <section id="cart-order">
            <div className="cart">
                <div>
                    <div><h2>Shopping cart</h2></div>
                    <div><h2>3 Items</h2></div>
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
                        <tr>
                            <td><div>image</div> <div>Name</div></td>
                            <td>2</td>
                            <td>$4000</td>
                            <td>$0</td>
                            <td>$4000</td>
                        </tr>
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