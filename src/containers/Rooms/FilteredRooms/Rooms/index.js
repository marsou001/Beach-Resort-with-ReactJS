import React, { useState, useEffect } from 'react';
import './style.css';
import Room from '../Room';
import Data from '../../../../Data/data';

function Rooms () {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms(Data);
    }, []);

    return (
        <div className="rooms">             
            {rooms.map(room => {
                const { type, price, images } = room.fields;
                const id = room.sys.id;
               return <Room key={id} id={id} image={images[0].fields.file.url} type={type} price={price}  />
            })}
        </div>
    )
}

export default Rooms;