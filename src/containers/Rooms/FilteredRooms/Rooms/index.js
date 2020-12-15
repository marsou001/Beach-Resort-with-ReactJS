import React from 'react';
import './style.css';
import Room from '../Room';

function Rooms (props) {    
    return (
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