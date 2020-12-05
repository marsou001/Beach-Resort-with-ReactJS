import React from 'react';
import './style.css';
// import Bcg from "../../images/defaultBcg.jpeg";
// import Room1 from "../../images/room-1.jpeg";
// import Data from '../../Data/data';

function Hero(props) {
    const image = `../../images/${props.image}.jpeg`;
    console.log(props.image)
    // let image;

    // switch(window.location.pathname) {
    //     case "/":
    //         image = Bcg;
    //         break;
    //     case "/rooms":
    //         image = Room1;
    //         break;
    //     default:
    //         image = Bcg;
    // }

    // console.log(image);
    
    return (
        // <div className="hero" style={{backgroundImage: `url("../../images/defaultBcg.jpeg")`}}>
        <div className="hero" style={{backgroundImage: `url(${require("../../images/defaultBcg.jpeg")})`}}> 
        {/* <div className="hero" style={{backgroundImage: `url(${require(image)})`}}>   */}
        {/* <div className="hero" style={{backgroundImage: props.image}}>    */}
        {/* <div className="hero" style={{backgroundImage: `url(${image})`}}>     */}
            {props.children}
        </div>
    )
}

export default Hero;