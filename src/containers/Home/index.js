import React from 'react'
import './style.css';
import Hero from './Hero';
import Services from './Services';
import Rooms from './Rooms';

function Home() {
    return (
        <div className="home">
            <Hero />
            <Services />
            <Rooms />
        </div>
    )
}

export default Home;