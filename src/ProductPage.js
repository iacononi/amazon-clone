import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import { db } from "./firebase";
import { useParams } from "react-router-dom";


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
                            <div className="blog-container">
                                <h4>{product.title}</h4>
                                <p>{product.price}</p>
                                <p>{product.rating}</p>
                                <img src={product.image} />
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default ProductPage
