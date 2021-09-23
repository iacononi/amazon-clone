import React, { useEffect, useLayoutEffect } from "react";
import ImageSlider from "./Animation/ImageSlider";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

import image1 from "./Animation/images/slide1.jpeg";
import image2 from "./Animation/images/slide2.jpeg";
import image3 from "./Animation/images/slide3.jpeg";
import image4 from "./Animation/images/slide4.jpeg";
import image5 from "./Animation/images/slide5.jpeg";
import image6 from "./Animation/images/slide6.jpeg";
import image7 from "./Animation/images/slide7.jpeg";
import image8 from "./Animation/images/slide8.jpeg";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div>
        <ImageSlider
          images={[
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
          ]}
        >
          <div>
            <h1 className="about-heading">ABOUT US</h1>
          </div>
        </ImageSlider>

        <div className="grids">
          <div data-aos="fade-up" className="about-section">
            <h1 className="about-section-heading">Our Story</h1>
            <p className="section-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate ut pharetra sit amet aliquam id. Sagittis orci a
              scelerisque purus semper eget. Quam vulputate dignissim
              suspendisse in est ante in nibh mauris. Consequat semper viverra
              nam libero justo. Velit dignissim sodales ut eu sem integer vitae
              justo eget.
            
            <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate ut pharetra sit amet aliquam id. Sagittis orci a
              scelerisque purus semper eget. Quam vulputate dignissim
              suspendisse in est ante in nibh mauris. Consequat semper viverra
              nam libero justo. Velit dignissim sodales ut eu sem integer vitae
              justo eget.
            </p>
          </div>

          <div data-aos="flip-right">
            <img className="image-section"
              src="https://images.unsplash.com/photo-1624521793559-136bfe16fc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
              alt="amazon-image1"
            />
          </div>

          <div data-aos="zoom-in" className="about-section">
            <h1 className="about-section-heading">Our Mission</h1>
            <p className="section-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate ut pharetra sit amet aliquam id. Sagittis orci a
              scelerisque purus semper eget. Quam vulputate dignissim
              suspendisse in est ante in nibh mauris. Consequat semper viverra
              nam libero justo. Velit dignissim sodales ut eu sem integer vitae
              justo eget.
            
            <br/><br/>
            
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate ut pharetra sit amet aliquam id. Sagittis orci a
              scelerisque purus semper eget. Quam vulputate dignissim
              suspendisse in est ante in nibh mauris. Consequat semper viverra
              nam libero justo. Velit dignissim sodales ut eu sem integer vitae
              justo eget.
            </p>
          </div>

          <div data-aos="flip-left">
            <img className="image-section"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="amazon-image3"
            />
          </div>
          <div data-aos="fade-up-left" className="about-section">
            <h1 className="about-section-heading">Our Values</h1>
            <p className="section-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate ut pharetra sit amet aliquam id. Sagittis orci a
              scelerisque purus semper eget. Quam vulputate dignissim
              suspendisse in est ante in nibh mauris. Consequat semper viverra
              nam libero justo. Velit dignissim sodales ut eu sem integer vitae
              justo eget.

              <br/><br/>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate ut pharetra sit amet aliquam id. Sagittis orci a
              scelerisque purus semper eget. Quam vulputate dignissim
              suspendisse in est ante in nibh mauris. Consequat semper viverra
              nam libero justo. Velit dignissim sodales ut eu sem integer vitae
              justo eget.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
