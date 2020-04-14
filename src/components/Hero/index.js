import React from 'react';
import './style.css';

function Hero(props) {
    return (
        // <div className="hero" style={{backgroundImage: `url("../../images/defaultBcg.jpeg")`}}>
        <div className="hero" style={{backgroundImage: `url(${require("../../images/defaultBcg.jpeg")})`}}>
           {/* <div className="hero" style={{backgroundImage: props.image}}> */}
            {props.children}
        </div>
    )
}

export default Hero;