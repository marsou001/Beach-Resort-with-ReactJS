import React from 'react';
import Hero from '../../../components/Hero';
import Bcg from "../../../images/defaultBcg.jpeg";

function Front() {
    return (
        // <Hero image={require("../../../images/defaultBcg.jpeg")}>
        <Hero image={Bcg}>
            <div className="front">
                <h1>Luxurious Rooms</h1>
                <hr />
                <p>Deluxe rooms starting at 299$</p>
                <a href="#">Our Rooms</a>
            </div>
        </Hero>
    )
}

export default Front;