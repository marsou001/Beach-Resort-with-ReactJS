import React, { useState, useEffect } from 'react';
import './style.css';
import Room from '../Room';

function Rooms (props) {    
    return (
        // <div className="rooms">             
        //     {props.data?.length > 0 ? (props.data.map(room => {
        //         const { type, price, images } = room.fields;
        //         const id = room.sys.id;
        //        return <Room key={id} id={id} image={images[0].fields.file.url} type={type} price={price} />
        //     })) : "Sorry, no rooms were found to match your requirements"}
        // </div>
        //)
        <>
        {props.data?.length > 0 ? (
            <div className="rooms">
                {props.data.map(room => {
                    const { type, price, images } = room.fields;
                    const id = room.sys.id;
                    return <Room key={id} id={id} image={images[0].fields.file.url} type={type} price={price} />
                })}
            </div>
        ) : (
            <div className="noRoomsFoundMessage">
                <p>Sorry, no rooms were found to match your requirements</p>
            </div>
        )}
        </>        
    )
}

export default Rooms;