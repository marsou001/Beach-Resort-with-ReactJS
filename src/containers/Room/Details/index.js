import React from 'react';
import './style.css';

function Details({ description, price, size, capacity, pets }) {    
    return (
        <div className="details">
            <article className="detailsBox">
                <h1>Details</h1>
                <p>{description}</p>
            </article>
            <aside className="infoBox">
                <h1>Info</h1>
                <ul>                    
                    <li>Price : ${price}</li>
                    <li>Size : {size} SQFT</li>
                    <li>Max Capacity : {capacity} {capacity > 1 ? "people" : "person"}</li>
                    <li>{pets || "No"} Pets Allowed</li>
                </ul>
            </aside>
        </div>
    )
}

export default Details;