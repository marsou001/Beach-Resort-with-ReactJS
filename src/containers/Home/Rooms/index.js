import React from 'react';
import './style.css';

function Rooms() {
    return (
        <div className="featuredRooms">
            <h1>Featured Rooms</h1>
            <hr />
            <div className="roomsBox">
                <div className="roomsBoxItem">
                    <div className="link">
                        <a href="#">Featured</a>
                    </div>
                    <img src={require("../../../images/room-12.jpeg")} alt="blabla" title="blabla" />
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
                    <img src={require("../../../images/room-8.jpeg")} alt="blabla" title="blabla" />
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

export default Rooms;