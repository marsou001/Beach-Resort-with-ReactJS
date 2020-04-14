import React from 'react';
import room2 from "../../../images/details-2.jpeg";
import room3 from "../../../images/details-3.jpeg";
import room4 from "../../../images/details-4.jpeg";
import './style.css';

function Images() {
    return (
        <div className="images">
            <div className="room room1">
                <img src={room2} title="room1" alt="room1" />
            </div>
            <div className="room room2">
                <img src={room3} title="room2" alt="room2" />
            </div>
            <div className="room room3">
                <img src={room4} title="room3" alt="room3" />
            </div>
        </div>
    )
}

export default Images;