import React from 'react';
import './style.css';
import Front from './Front';
import FilteredRooms from './FilteredRooms';

function Rooms () {
    return (
        <div className="rooms">
            <Front />
            <FilteredRooms />
        </div>
    )
}

export default Rooms;
