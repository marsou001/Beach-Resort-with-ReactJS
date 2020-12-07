import React from 'react';
import './style.css';

function Filter (props) {
    return (
        <div className="filter">
            <div className="filterUnit">
                <label htmlFor="type">Room type</label>                    
                <select id="type" onChange={props.getPreferences}>
                    <option value="all">All</option>
                    <option value="family">Family</option>
                    <option value="double">Double</option>
                    <option value="single">Single</option>
                    <option value="presidential">Presidential</option>
                </select>   
            </div>
            <div className="filterUnit">
                <label htmlFor="guests">Guests</label>                    
                <select id="guests" onChange={props.getPreferences}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>   
            </div>    
            <div className="filterUnit">
                <label htmlFor="price">Room Price ${props.price}</label>                    
                <input type="range" id="price" min="0" max="600" onChange={props.getPreferences} value={props.price} />  
            </div>
            <div className="filterUnit">
                <label htmlFor="size">Room Size {props.size}</label>                    
                <input type="number" id="size" min="0" max="1000" onChange={props.getPreferences} />  
            </div>    
            <div className="filterUnit">                                        
                <div className="checkboxUnit">
                    <input type="checkbox" id="breakfast" onChange={props.getPreferences} />  
                    <label htmlFor="breakfast" className="inlineCheckbox">breakfast</label>
                </div>

                <div className="checkboxUnit">
                    <input type="checkbox" id="pets" onChange={props.getPreferences} />
                    <label htmlFor="pets" className="inlineCheckbox">pets</label>
                </div>                                        
            </div>       
        </div>
    )
}

export default Filter;