import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';

function Front ({ image, id }) {
    return (                
    <Hero image={image} id={id}>
            <div className="front">
                <h1>Family Basic Room</h1>
                <hr />
                <Link to="/rooms">Back To Rooms</Link>
            </div>
        </Hero>
    )
}

export default Front;