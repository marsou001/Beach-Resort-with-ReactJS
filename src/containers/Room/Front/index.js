import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import Bcg from "../../../images/defaultBcg.jpeg";

function Front () {
    return (        
        // <Hero image={require("../../../images/defaultBcg.jpeg")}>
        <Hero image={Bcg}>
            <div className="front">
                <h1>Family Basic Room</h1>
                <hr />
                <Link to="/rooms">Back To Rooms</Link>
            </div>
        </Hero>
    )
}

export default Front;