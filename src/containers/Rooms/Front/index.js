import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import Room1 from "../../../images/room-1.jpeg";

function Front() {
    return (
        // <Hero image={require("../../../images/room-1.jpeg")}>
        <Hero image={Room1}>
        {/* <Hero image="room-1"> */}
            <div className="front">
                <h1>Our Rooms</h1>
                <hr />
                <Link to="/">Return Home</Link>
            </div>
        </Hero>                            
    )
}

export default Front;