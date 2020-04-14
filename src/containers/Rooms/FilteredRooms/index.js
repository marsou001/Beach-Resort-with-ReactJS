import React from 'react';
import './style.css';
import Filter from './Filter';
import Rooms from './Rooms';

function FilteredRooms () {
    return (
        <div className="filteredRooms">
            <h1>Search Rooms</h1>
            <hr />
            <Filter />
            <Rooms />
        </div>
    )
}

export default FilteredRooms;