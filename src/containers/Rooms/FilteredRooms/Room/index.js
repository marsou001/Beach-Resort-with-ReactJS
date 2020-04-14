import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Room ({ id, image, type, price }) {
    return (
        <div className="room fit-box">
            <div className="link">
                <Link to={`/rooms/${id}`}>Featured</Link>
            </div>
            <img src={image} alt="blabla" title="blabla" />  
            <div className="price">
                <span className="priceTag">${price}</span><span className="perNight">per night</span>
            </div>
            <div className="deluxe">
                {type} Deluxe
            </div>             
        </div>
    )
}

export default Room;