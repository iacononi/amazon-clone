import React, { useEffect, useState } from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
import { db } from "./firebase";


const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products').onSnapshot((snap) => {
       let documents = [];
       snap.forEach((doc) => {
         documents.push({ ...doc.data(), id: doc.id });
       });
       setProducts(documents);
     });
   }, []);

   const HandleAll = () =>{
    db.collection('products').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleEducation = () =>{
    db.collection('products').where("category", "array-contains", 'education').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleRomance = () =>{
    db.collection('products').where("category", "array-contains", 'romance').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleSuspense = () =>{
    db.collection('products').where("category", "array-contains", 'suspense').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleThriller = () =>{
    db.collection('products').where("category", "array-contains", 'thriller').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }
  const HandleMystery = () =>{
    db.collection('products').where("category", "array-contains", 'mystery').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleFantasy = () =>{
    db.collection('products').where("category", "array-contains", 'fantasy').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }


  const HandleNonFiction = () =>{
    db.collection('products').where("category", "array-contains", 'non-fiction').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleFiction = () =>{
    db.collection('products').where("category", "array-contains", 'fiction').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleSelfHelp = () =>{
    db.collection('products').where("category", "array-contains", 'self-help').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  const HandleBusiness = () =>{
    db.collection('products').where("category", "array-contains", 'business').get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProducts(documents);
    });
  }

  return (
    <div>
      <div className="catalogue-container">
        <img className="catalogue-image" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"/>
        <h1 className="catalogue-heading">Catalogue</h1>
      </div>
      <div className="filter">
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleAll}>All Books</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleFiction}>Fiction</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleNonFiction}>Non-Fiction</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleRomance}>Romance</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleThriller}>Thriller</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleMystery}>Mystery</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleSuspense}>Suspense</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleFantasy}>Fantasy</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleSelfHelp}>Self-Help</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleEducation}>Education</button>
      <button className="filterButton border-gradient border-gradient-orange" onClick={HandleBusiness}>Business</button>
      </div>
    <div className="product-grid">
      {products?.map((product) => (
          // <div className="product-wrap" key={doc.id}>
          //     <img src={doc.image} alt={doc.title}/>

          // <Product
          //  id={doc.id}
          //  title={doc.title}
          //  price={doc.price}
          //  image={doc.image}
          // />
          <div className="product">
            

            <img src={product.image} alt={product.title} />
            <div className="product__info">
              <Link to={`products/${product.id}`}>
                <p>{product.title} </p>
              </Link>
              <p className="product__price">
                <small>$</small>
                <strong>{product.price}</strong>
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
