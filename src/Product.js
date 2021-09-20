import React, { useState, useEffect } from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { db } from "./firebase";



function Product({ id, title, image, price }) {

    const [{ basket }, dispatch] = useStateValue();
    const [ reviews , setReviews ] = useState([])
    useEffect(() => {
        fetchReviews();
    }, [])

        //Get the reviews for that product 
        const fetchReviews = async () => {
            const response = db.collection('products').doc(id).collection('reviews');
            const data = await response.get();
            data.docs.forEach(item => {
                setReviews(oldArray => [...oldArray, item.data()])
            })
        }
    
        console.log("the reviews officially are ", reviews);
    
          
    
        var count = 0;
        for (let i=0; i < reviews.length; i++){
            console.log('another one ', reviews[i].rating);
            count += reviews[i].rating;
        }
    
        let average = count / (reviews.length);
        let roundedAverage = Math.round(average)
        const stars = [];

        for (let i=1; i<=roundedAverage; i++){
            stars.push(<span>⭐</span>)
        }

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
                rating: roundedAverage,
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
                   {stars}

                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
