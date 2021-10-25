import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const firstName= JSON.parse(localStorage.getItem('firstName'));
  const lastName= JSON.parse(localStorage.getItem('lastName'));
  const streetAddress= JSON.parse(localStorage.getItem('streetAddress'));
  const suburb= JSON.parse(localStorage.getItem('suburb'));
  const state= JSON.parse(localStorage.getItem('state'));
  const postCode= JSON.parse(localStorage.getItem('postCode'));

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total in a currencies subunits
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log('THE SECRET IS >>>', clientSecret);
  console.log("user is ", user)

  const handleSubmit = async (event) => {
    // stripe magic
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        updateFirebase(paymentIntent.id, user.uid, basket, paymentIntent.amount, paymentIntent.created, user.email)

        dispatch({
          type: 'EMPTY_BASKET'
        })

        history.replace("/orders")

      })
  };


  function updateFirebase(id, user, basket, amount, created, email){
    var endAmount = amount / 100;
    let data = {
       basket: basket,
       amount: endAmount.toFixed(2),
       created: created,
       user: user,
       email: email
    }
    // it successfully created a new user with email and password
        db.collection("orders").doc(id).set(data);
}


  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{firstName} {lastName}</p>
            <p>{streetAddress}</p>
            <p>{suburb} </p>
            <p>{state} {postCode}</p>
          </div>
        </div>

        {/* Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        {/* Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
