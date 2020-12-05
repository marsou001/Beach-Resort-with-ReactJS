import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import Bcg from "../../../images/defaultBcg.jpeg";

function Front() {
    return (
        // <Hero image={require("../../../images/defaultBcg.jpeg")}>
        <Hero image={Bcg}>
        {/* <Hero image="defaultBcg"> */}
            <div className="front">
                <h1>Luxurious Rooms</h1>
                <hr />
                <p>Deluxe rooms starting at 299$</p>
                <Link to="/rooms">Our Rooms</Link>
            </div>
        </Hero>
    )
}

export default Front;