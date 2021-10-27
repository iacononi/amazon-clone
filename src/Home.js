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
                <div className="home__container">
                <img className="home__image" src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <h1 className="home-heading">bookshouse</h1>
                </div>
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
