import React from 'react';
import './style.css';

function Services() {
    return (
        <div className="services">
            <h1>Services</h1>                
            <hr />                
            <div className="servicesBox">
                <div className="servicesBoxItem servicesBoxItem1">
                    <i className="fas fa-cocktail"></i>
                    <h2>Free Cocktails</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod!</p>
                </div>                    
                <div className="servicesBoxItem servicesBoxItem2">
                    <i className="fas fa-hiking"></i>
                    <h2>Endless Hicking</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod!</p>
                </div>
                <div className="servicesBoxItem servicesBoxItem3">
                    <i className="fas fa-shuttle-van"></i>
                    <h2>Free Shuttle</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod!</p>
                </div>
                <div className="servicesBoxItem servicesBoxItem4">
                    <i className="fas fa-beer"></i>
                    <h2>Strongest Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod!</p>
                </div>
            </div>
        </div>
    )
}

export default Services;