import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';

function Front() {
    return (
        <Hero>
            <div className="front">
                <h1>Our Rooms</h1>
                <hr />
                <Link to="/">Return Home</Link>
            </div>
        </Hero>                            
    )
}

export default Front;