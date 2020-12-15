import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

function Hero(props) {
    const location = useLocation();
    const id = props.id;
    const defaultBackgroundImage = `url(${require("../../images/defaultBcg.jpeg")})`;
    const image = (id && location.pathname === `/rooms/${id}`) ? 'url(' + require(`../../images/room-${id}.jpeg`) + ')' : defaultBackgroundImage;
    
    return (
        <div className="hero" style={{backgroundImage: image}}>         
            {props.children}
        </div>
    )
}

export default Hero;