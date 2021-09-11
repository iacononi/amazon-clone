import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import { db } from "./firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from './StateProvider';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import UpdateIcon from '@material-ui/icons/Update';
import FastForwardIcon from '@material-ui/icons/FastForward';

function ProductPage() {
    const [products, setProducts ] = useState([])
    const [ reviews , setReviews ] = useState([])
    useEffect(() => {
        fetchProducts();
    }, [])

    const { id } = useParams();

    //Get the product details from firebase 
    const fetchProducts = async () => {
        const response = db.collection('products');
        const data = await response.get();
        data.docs.forEach(item => {
            setProducts([...products, item.data()])
            fetchReviews();
        })
    }

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

    return (
        <div className="productPage">
            {
                products && products.map(product => {
                    if (product.id == id) {
                        console.log('product is ', product)
                        return (
                            <div>
                            <div className="productPage__container">
                                <div className="productPage__left">
                                    <img src={product.image} />
                                </div>
                                <div className="productPage__right">
                                    <h4>{product.title}</h4>
                                    <p class="productPage__price">${product.price}</p>
                                    <div className="product__rating">
                                        {Array(product.rating)
                                            .fill()
                                            .map((_, i) => (
                                                <p>⭐</p>
                                            ))}

                                    </div>
                                    <div className="productPage__quantity buttons_added">
                                        <input type="button" value="-" class="minus" onClick={minusFunction}/><input type="number" id="productQuantity" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""/><input type="button" value="+" class="plus" onClick={addFunction} />
                                    </div>
                                    <Button title={product.title} price={product.price} id={product.id} img={product.image} rating={product.rating} />
                        
                                <div className="productPage_rightIcons">
                                    <div className="shipping_section">
                                     <LocalShippingIcon />Free Shipping on orders over $100           
                                    </div>
                                    <div className="returns_section">
                                    <UpdateIcon /> 30 Day Returns               
                                    </div>
                                    <div className="fast_section">
                                    <FastForwardIcon /> Next Day Dispatch              
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="productPage__bottom">
                                    <div className="productPage__reviews__left">
                                        <h3>Customer Reviews</h3>
                                        <div className="product__rating">
                                                {stars}
                                            </div>
                                        { reviews.map(review => {
                                        console.log("the review is ", review)
                                        return (
                                            <div className="productPage__review">
                                            {Array(review.rating)
                                                    .fill()
                                                    .map((_, i) => (
                                                        <span>⭐</span>
                                                    ))}
                                            <p>{review.review}<br />
                                            {review.name}</p>
                                            </div> 
                                        )
                                        })}
                                        </div>
                                    <div className="productPage__reviews__right">
                                        <h3>Write a Review</h3>
                                        <div className="productPage__ratingsSelect">
                                          <label for="rating">Rating:</label>
                                            <select id="rating" name="rating">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            </select>
                                        <textarea>
                                        
                                        </textarea>
                                        <input placeholder="Name">
                                        </input>
                                        </div>
                                        <button class="productPage__atc productPage__reviewButton" >Submit Review</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
          
                
        </div>
    )
}

function Button(props){
    console.log("props are", props);
    const [{ basket }, dispatch] = useStateValue();
    var quantity = 1;
   
    console.log("quantity is ", quantity);
    const addToBasket = () => {
        if (sessionStorage.getItem("quantity")) {
            quantity = parseInt(sessionStorage.getItem('quantity'));
        }
        console.log("quantity is ", quantity);

        //dispatch the item to the datalayer ie basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.img,
                price: props.price,
                rating: props.rating,
                quantity: quantity
            },
        });
    };

    return (
        <>
         <button id="atc_button" class="productPage__atc" onClick={addToBasket}>Add to Basket</button>
        </>
    )
}

function minusFunction(){
    console.log("minus innit");
    const inputValue = document.getElementById("productQuantity").value;
    console.log("minus innit", inputValue);
    var value = parseInt(inputValue);
    var minusValue = value - 1
    if (value > 1){
        document.getElementById("productQuantity").value = minusValue;
        storeQuantity(minusValue)
    } else {
        alert("product cannot add 0 stock")
    }
}

function addFunction(){
    console.log("add innit")
    var inputValue = document.getElementById("productQuantity").value;
    var value = parseInt(inputValue);
    var addedValue = value + 1
    document.getElementById("productQuantity").value = addedValue;
    storeQuantity(addedValue)
}

function storeQuantity(value){
    console.log("the minus value from this function is ", value)
    sessionStorage.removeItem('quantity');
    sessionStorage.setItem('quantity', value);

}

function resetStorage(){
    if (sessionStorage.getItem("quantity")){
        sessionStorage.removeItem('quantity');
    }
}

window.onload = resetStorage();

export default ProductPage
