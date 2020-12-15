import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';

function Front() {    
    return (        
        <Hero>
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