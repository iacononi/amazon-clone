import React from "react";
import useFirestore from "./useFirestore";
import "./Collection.css";
import { Link } from "react-router-dom";
import { db } from "./firebase";

const Collection = () => {

  const { docs } = useFirestore("products");
  console.log(docs);

  // const handlePriceFilter = () =>{
  //   db.collection("products").where("price", "<", "20").get().then(snap => {
  //     snap.forEach(doc => {
  //         console.log(doc.data());
  //     });
  // });
  // }


  return (
    <div>
      <h1>Catalogue</h1>
      {/* <button onClick={handlePriceFilter}>Price less than $20</button> */}
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
          <div className="product"  key={doc.id}>
            

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
    </div>
  );
};

export default Collection;
