import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import { addItem, decrementItem, incrementItem, removeItem } from '/home/nicky/react-ecommerce/src/redux/actions/cartActions'

const ProductDetails = () => {
    const products = useSelector((state) => state.cart.vehicles);
    const { id } = useParams();
    //const dispatch = useDispatch();

    const vehicle = products.filter((item) => item.id ===Number(id))
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
                        <p>Price: ${vehicle[0].price}</p>
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
                        <p className="text-success">{vehicle[0].fuel}</p>
                        </div>
                        <div className="details-item">
                        <h4>Transmission</h4>
                        <p className="text-success">{vehicle[0].transmission[0]}</p>
                        </div>
                        <div className="details-item">
                        <h4>Engine size</h4>
                        <p className="text-success">{vehicle[0].engine_size}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;