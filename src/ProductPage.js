import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import { db } from "./firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from './StateProvider';



function ProductPage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        const response = db.collection('products');
        const data = await response.get();
        data.docs.forEach(item => {
            setProducts([...products, item.data()])
        })
    }

    const { id } = useParams();

    return (
        <div className="productPage">
            {
                products && products.map(product => {
                    if (product.id == id) {
                        return (
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
