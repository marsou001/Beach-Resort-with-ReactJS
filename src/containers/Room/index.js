import React from 'react';
import './style.css';
import Front from './Front';
import Images from './Images';
import Details from './Details';
import Extras from './Extras';

function Room () {
    return (
        <div className="room">
            <Front />
            <main>
                <Images />
                <Details />
                <Extras />
            </main>
        </div>
    )
}

export default Room;