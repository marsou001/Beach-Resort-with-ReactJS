import React from 'react';
import './style.css';

function Details() {
    return (
        <div className="details">
            <article className="detailsBox">
                <h1>Details</h1>
                <p>Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.</p>
            </article>
            <aside className="infoBox">
                <h1>Info</h1>
                <ul>
                    <li>Price : $100</li>
                    <li>Size : 200 SQFT</li>
                    <li>Max Capacity : 1 Person</li>
                    <li>No Pets Allowed</li>
                </ul>
            </aside>
        </div>
    )
}

export default Details;