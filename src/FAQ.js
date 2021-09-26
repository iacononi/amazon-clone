import React, { useLayoutEffect } from "react";
import Accordion from "./Animation/Accordion";
import "./FAQ.css";
import { Link } from "react-router-dom";



function FAQ() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div>
      <div className="heading-container">
        <h1 className="main-heading">Frequently Asked Questions</h1>
      </div>
      <div className="faq-section">
          <h3 className="faq-section-heading">Tracking & Shipping</h3>
      <Accordion
        title="How long does it typically take to receive items?"
        content="You can expect to receive your items within 5-7 business days. Please keep in mind that this time does not include the processing. If you haven't received your order after 3 weeks, please contact us."
      />
      <Accordion
        title="How can I track my order?"
        content="To track your order, simply enter the tracking ID from your Shipping Confirmation email into the box at the top of our Tracking Page. 
        </br>
        If you did not receive a Shipping Confirmation yet, your order is still in processing and should be fulfilled in no more than 1 week."
      />
      <Accordion
        title="Do you offer express shipping?"
        content="Unfortunately, we do not offer express shipping currently."
      />
      <Accordion
        title="Why did I only receive part of my order?"
        content="We ship our items from multiple printing facilities in different locations. As a result, items within the same order may be shipped from different facilities and arrive at slightly different times. 
        </br>
        Some items in your order may arrive before others. When this happens, it is likely that the remaining items in your order are still in transit and will arrive very soon."
      />
      <Accordion
        title="Why haven't I received a tracking number?"
        content="This may occur because your order still has not been processed. Once it is processed, you will receive a tracking number via email."
      />
      </div>
      <div className="faq-section">
          <h3 className="faq-section-heading">Order Support</h3>
      <Accordion
        title="What is your return policy?"
        content="If you're not 100% satisfied with your purchase, you can return your order for a full refund for up to 50 days from the purchase date.
        </br>
        Returned products must be in the condition you received them and in the original box and/or packaging."
      />
      <Accordion
        title="What is your refund policy?"
        content="Refunds will be issued for items that are returned to our head office in their unopened, original packaging and after an inspection by our team. 
        </br>
        Please allow 3-5 business days for refunds processed to appear back in your account. 
        "
      />
      <Accordion
        title="Can I cancel my order?"
        content="Orders may only be canceled if they have not yet been fulfilled. If your packages are currently in transit (ie a tracking number has been provided), we unfortunately cannot cancel your order."
      />
      <Accordion
        title="Can I modify my order?"
        content="Modifications may only be made to orders that have not yet been fulfilled. If your packages have already been put in the mail (ie they have an assigned tracking number), we unfortunately won't be able to modify your order."
      />
      </div>

      <div className="contact-link">
      Haven't found the answer to your question?  <p className="link"><Link to="/contact">Contact Us</Link></p>
      </div>
    </div>
  );
}

export default FAQ;
