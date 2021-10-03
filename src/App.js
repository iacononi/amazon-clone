import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import Contact from "./Contact";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
import FAQ from "./FAQ";
import About from "./About";
import Shipping from "./Shipping";
import LiveChat from "./LiveChat";
import Agent from "./Agent";

const promise = loadStripe('pk_test_51JPloVHnY18H0aVP13YqlQu9RCru9R58Vexd7c1PycsQsr4JxxgPz2FIyjU7c9uGZqcfr7vMbWWWUiYnaiPL5l8500rWeo2ku8');


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/products/:id">
              <ProductPage />
            </Route>
            <Route path="/shipping">
              <Shipping />
            </Route>
            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/agent">
              <Agent />
            </Route>
            <Route path="/">       
              <Home />
            </Route>
          </Switch>
          <Footer/>
          <LiveChat/>
      </div>
    </Router>
  );
}

export default App;
