import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
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
import AdminPage from "./Admin/AdminPage";

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
        <Switch>
          <Route path="/orders">
              <Header />
              <Orders />
              <Footer/>
            </Route>
            <Route path="/login">
              <Header />
              <Login />
              <Footer/>
            </Route>
            <Route path="/admin" component={AdminPage}>
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer/>
            </Route>
            <Route path="/products/:id">
              <Header />
              <ProductPage />
              <Footer/>
            </Route>
            <Route path="/shipping">
              <Header />
              <Shipping />
              <Footer/>
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer/>
            </Route>
            <Route path="/about">
              <Header />
              <About />
              <Footer/>
            </Route>
            <Route path="/contact">
              <Header />
              <Contact />
              <Footer/>
            </Route>
            <Route path="/faq">
              <Header />
              <FAQ />
              <Footer/>
            </Route>
            <Route path="/">   
              <Header />    
              <Home />
              <Footer/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
