import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("user_56cbK8LonjbUbtMEpOeXN");

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const message = watch('contactMessage') || "";
  const messageCharsLeft = 2500 - message.length;
  const [ticketNumber, setTicketNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");

  const generateTicketNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setTicketNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data) => {
    const form = document.querySelector('#contact_form');
    const statusMessage = document.querySelector('.status-message');
    console.log(data);
    // reset();
    // postSubmission();
    generateTicketNumber();
    sendForm("contact_form", "template_3i23rlr", "#contact_form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
      statusMessage.className = "status-message success";
      setTimeout(()=> {
        statusMessage.className = 'status-message'
      }, 5000)
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage("Failed to send message! Please try again later.");
      statusMessage.className = "status-message failure";
      setTimeout(()=> {
        statusMessage.className = 'status-message'
      }, 5000)
      }
    );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} id="contact_form">
      <h1>Contact Us 📱</h1>
      <p className='status-message'>{statusMessage}</p>

      <input type="hidden" name="ticket_number" value={ticketNumber} />

      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        maxLength ="30"
        aria-invalid={errors.name ? "true" : "false"}
        {...register("name", { required: "Required," })}
      />
      {errors.name && errors.name.type === "required" && (
        <div role="alert">
          Name is required
          <br />
        </div>
      )}

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", { required: "Required," })}
      />
      {errors.email && errors.email.type === "required" && (
        <div role="alert">
          Email is required
          <br />
        </div>
      )}

      <label>Message</label>
      <textarea
        name="contactMessage"
        placeholder="Message"
        maxLength="2500"
        aria-invalid={errors.contactMessage ? "true" : "false"}
        {...register("contactMessage", { required: "Required," })}
      ></textarea>
      {/* <p className='message-chars-left'>{messageCharsLeft}</p> */}
      {errors.contactMessage && errors.contactMessage.type === "required" && (
        <div role="alert">
          Message is required
          <br />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
