import React from 'react';
import './style.css';

function Images({ images }) {
    return (
        <div className="images">
            {images.slice(1).map((image, i) => (
                <div key={i} className="room">
                    <img src={image.fields.file.url} title="room" alt="room" />
                </div>
            ))}            
        </div>
    )
}

export default Images;