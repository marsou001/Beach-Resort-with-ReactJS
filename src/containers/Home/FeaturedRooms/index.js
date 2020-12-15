import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function FeaturedRooms() {
    return (
        <div className="featuredRooms">
            <h1>Featured Rooms</h1>
            <hr />
            <div className="roomsBox">
                <div className="roomsBoxItem fit-box">
                    <div className="link">
                        <Link to="/rooms/12">Featured</Link>
                    </div>
                    <img src={require("../../../images/room-12.jpeg")} alt="blabla" title="blabla" />
                    <div className="price">
                        <span className="priceTag">$500</span><span className="perNight">per night</span>
                    </div>
                    <div className="deluxe">
                        Family Deluxe
                    </div>
                </div>
                <div className="roomsBoxItem fit-box">
                    <div className="link">
                    <   Link to="/rooms/8">Featured</Link>
                    </div>
                    <img src={require("../../../images/room-8.jpeg")} alt="blabla" title="blabla" />
                    <div className="price">
                        <span className="priceTag">$400</span><span className="perNight">per night</span>
                    </div>
                    <div className="deluxe">
                        Double Deluxe
                    </div>
                </div>
                <div className="roomsBoxItem fit-box">
                    <div className="link">
                        <Link to="/rooms/4">Featured</Link>
                    </div>
                    <img src={require("../../../images/room-4.jpeg")} alt="blabla" title="blabla" />
                    <div className="price">
                        <span className="priceTag">$300</span><span className="perNight">per night</span>
                    </div>
                    <div className="deluxe">
                        Single Deluxe
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedRooms;