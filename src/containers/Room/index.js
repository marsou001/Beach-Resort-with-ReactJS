import React, { useState, useEffect } from 'react';
import './style.css';
import Front from './Front';
import Images from './Images';
import Details from './Details';
import Extras from './Extras';
import rooms from '../../Data/data';

function Room (props) {
    const [room, setRoom] = useState(null);
    
    useEffect(_ => {
        const id = props.match.params.id;
        const roomTarget = rooms.find(room => Number(room.sys.id) === Number(id));
        setRoom(roomTarget);
    }, [props.match.params.id]);    

    if (room === null) return null;

    const { description, price, size, capacity, pets, images } = room.fields;

    return (
        <div className="room">
            <Front image={images[0].fields.file.url} id={props.match.params.id} />
            <main>
                <Images images={images} />
                <Details 
                    description={description} 
                    price={price} 
                    size={size} 
                    capacity={capacity} 
                    pets={pets} 
                />
                <Extras />
            </main>
        </div>
    )
}

export default Room;