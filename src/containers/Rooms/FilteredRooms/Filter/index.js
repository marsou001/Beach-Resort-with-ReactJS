import React from 'react'
import './style.css';

function Filter () {
    return (
        <div className="filter">
            <div className="filterUnit">
                <label htmlFor="type">Room type</label>                    
                <select id="type">
                    <option value="all">All</option>
                    <option value="triple">Triple</option>
                    <option value="family">Family</option>
                    <option value="double">Double</option>
                    <option value="single">Single</option>
                </select>   
            </div>
            <div className="filterUnit">
                <label htmlFor="guests">Guests</label>                    
                <select id="guests">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>   
            </div>    
            <div className="filterUnit">
                <label htmlFor="price">Room Price $600</label>                    
                <input type="range" id="price" min="0" max="600" />  
            </div>
            <div className="filterUnit">
                <label htmlFor="size">Room Price $600</label>                    
                <input type="number" id="size" min="0" max="3000" />  
            </div>    
            <div className="filterUnit">                                        
                <div className="checkboxUnit">
                    <input type="checkbox" id="breakfast" />  
                    <label htmlFor="breakfast" className="inlineCheckbox">breakfast</label>
                </div>

                <div className="checkboxUnit">
                    <input type="checkbox" id="pets" />
                    <label htmlFor="pets" className="inlineCheckbox">pets</label>
                </div>                                        
            </div>       
        </div>
    )
}

export default Filter;