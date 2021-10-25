import React from "react";
import useFirestore from "./useFirestore";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

const ProductGrid = () => {

  const { docs } = useFirestore("products");
  console.log(docs);


  return (
    <div className="product-grid">
      {docs &&
        docs.map((doc) => (
          // <div className="product-wrap" key={doc.id}>
          //     <img src={doc.image} alt={doc.title}/>

          // <Product
          //  id={doc.id}
          //  title={doc.title}
          //  price={doc.price}
          //  image={doc.image}
          // />
          <div className="product">
            

            <img src={doc.image} alt={doc.title} />
            <div className="product__info">
              <Link to={`products/${doc.id}`}>
                <p>{doc.title} </p>
              </Link>
              <p className="product__price">
                <small>$</small>
                <strong>{doc.price}</strong>
              </p>
            </div>
          </div>
          // </div>
        ))}
    </div>
  );
};

export default ProductGrid;
