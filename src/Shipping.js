import React from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import "./Shipping.css";

function Shipping() {
  const history = useHistory();
  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [streetAddress, setStreetAddress] = useLocalStorage("streetAddress", "");
  const [suburb, setSuburb] = useLocalStorage("suburb", "");
  const [state, setState] = useLocalStorage("state", "");
  const [postCode, setPostCode] = useLocalStorage("postCode", "");

  window.onbeforeunload = function (e) {
    localStorage.clear();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/payment");
  };
  return (
      <form className="shipping-form" onSubmit={submitHandler}>
          <h1 className="heading">Shipping Address</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            id="streetAddress"
            placeholder="Enter street address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
       
          <label htmlFor="suburb">Suburb</label>
          <input
            type="text"
            id="suburb"
            placeholder="Enter suburb"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            required
          />
        
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            placeholder="Enter state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        
          <label htmlFor="postCode">Post Code</label>
          <input
            type="text"
            id="postCode"
            placeholder="Enter post code"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            required
          />
        
          <button className="primary" type="submit">
            Continue
          </button>
    
      </form>
    
  );
}
export default Shipping;
