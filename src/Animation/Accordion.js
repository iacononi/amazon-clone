import React, { useState, useRef } from 'react';
import './Accordion.css';
import Chevron from './Chevron';

function Accordion(props) {

    const[active, setActive] = useState("");
    const[height, setHeight] = useState("0px");
    const[rotate, setRotate] = useState("accordion-icon");

    const content = useRef(null);


    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active === "active" ? "accordion-icon" : "accordion-icon rotate");
    }

    return (
        <div className="accordion-container">
<div className="accordion-section">
        <button className={`accordion ${active}`} onClick={toggleAccordion}>
            <p className="accordion-title">
                {props.title}
            </p>
            <Chevron className={`${rotate}`} width={10} fill={"#FF9900"}/>
        </button>
        <div ref={content} style={{maxHeight: `${height}`}}className="accordion-content">
            <div className="accordion-text" dangerouslySetInnerHTML={{__html: props.content}}>
                
            </div>
        </div>
        </div>
        </div>
        
    )
}

export default Accordion

