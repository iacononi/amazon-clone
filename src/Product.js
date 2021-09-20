import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';


function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    console.log("this is basket", basket);

    const addToBasket = () => {
        //dispatch the item to the datalayer ie basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: 1
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <Link to={`products/${id}`}><p>{title}</p></Link>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}

                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
