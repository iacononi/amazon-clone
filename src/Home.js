import React, { useState, useEffect } from 'react';
import "./Home.css";
import { db } from "./firebase";
import Product from "./Product";
import { useStateValue } from './StateProvider';

function Home() {

    const [products, setProducts ] = useState([])
    useEffect(() => {
        fetchProducts();
    }, [])

    //Get the product details from firebase 
    const fetchProducts = async () => {
        const response = db.collection('products');
        const data = await response.get();
        data.docs.forEach(item => {
            setProducts(oldArray => [...oldArray, item.data()])
        })
    }

    console.log("on the homepage the products are", products)


    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/ZjBiMDcxY2Qt/ZjBiMDcxY2Qt-MjM2M2JkNWIt-w1500._CB645256551_.jpg" alt="" />
                <div className="home__row">
                {
                products && products.map(product => {
                if (product == products[0] || product == products[1]){
                    return (
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            
                        />
                    )
                  }
                })
             }
                   </div>
            

                <div className="home__row">
                {
                products && products.map(product => {
                if (product == products[2] || product == products[3] || product == products[4]){
                    return (
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            
                        />
                    )
                  }
                })
             }
                </div>

                <div className="home__row">
                    {
                    products && products.map(product => {
                    if (product == products[5]){
                        return (
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                
                            />
                        )
                    }
                    })
                }
                </div>


            </div>
        </div>
    )
}

export default Home
