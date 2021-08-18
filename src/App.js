import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51JPloVHnY18H0aVP13YqlQu9RCru9R58Vexd7c1PycsQsr4JxxgPz2FIyjU7c9uGZqcfr7vMbWWWUiYnaiPL5l8500rWeo2ku8');


function App() {
  return (
     <Router>
      <div className="app">
        <Header />   
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/">       
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
