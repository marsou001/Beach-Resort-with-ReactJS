import React from 'react';
import './style.css';
import Front from './Front';
import Services from './Services';
import FeaturedRooms from './FeaturedRooms';

function Home() {
    return (
        <div className="home">
            <Front />
            <Services />
            <FeaturedRooms />
        </div>
    )
}

export default Home;