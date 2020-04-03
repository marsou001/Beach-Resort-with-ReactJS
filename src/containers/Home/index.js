import React from 'react'
import './style.css';

function Home() {
    return (
        <div className="home">
            <div className="hero"> 
                <div className="front">
                    <h1>Luxurious Rooms</h1>
                    <hr />
                    <p>Deluxe rooms starting at 299$</p>
                    <a href="#">Our Rooms</a>
                </div>       
            </div>
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
            <div className="featuredRooms">
                <h1>Featured Rooms</h1>
                <hr />
                <div className="roomsBox">
                    <div className="roomsBoxItem">
                        <div className="link">
                            <a href="#">Featured</a>
                        </div>
                        <img src={require("../../images/room-12.jpeg")} alt="blabla" title="blabla" />
                        <div className="price">
                            <span className="priceTag">$500</span><span className="perNight">per night</span>
                        </div>
                        <div className="deluxe">
                            Family Deluxe
                        </div>
                    </div>
                    <div className="roomsBoxItem">
                        <div className="link">
                            <a href="#">Featured</a>
                        </div>
                        <img src={require("../../images/room-8.jpeg")} alt="blabla" title="blabla" />
                        <div className="price">
                            <span className="priceTag">$400</span><span className="perNight">per night</span>
                        </div>
                        <div className="deluxe">
                            Double Deluxe
                        </div>
                    </div>
                    <div className="roomsBoxItem">
                        <div className="link">
                            <a href="#">Featured</a>
                        </div>
                        <img src={require("../../images/room-4.jpeg")} alt="blabla" title="blabla" />
                        <div className="price">
                            <span className="priceTag">$300</span><span className="perNight">per night</span>
                        </div>
                        <div className="deluxe">
                            Single Deluxe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;