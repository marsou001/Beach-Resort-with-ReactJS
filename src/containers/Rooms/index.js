import React, { useState, useEffect } from 'react';
import './style.css';
import Front from './Front';
import Filter from './Filter';
import Rooms from './Rooms';
import Data from '../../Data/data';

function FilteredRooms() {    
    const [rooms, setRooms] = useState([]);
    const [type, setType] = useState("");
    const [guests, setGuests] = useState(0);
    const [price, setPrice] = useState(450);
    const [size, setSize] = useState(500);
    const [isBreakfastOffered, setIsBreakfastOffered] = useState(null);
    const [istPetsAllowed, setIsPetsAllowed] = useState(null);

    const current = {};
    
    const handleChange = e => {
        const target = e.target;
        let filteredRooms = [...Data];        
        
        switch(target.id) {
            case 'type':                                             
                setType(target.value);                
                current.type = target.value;  
                break;
            case 'guests':
                setGuests(target.value);
                current.guests = target.value;
                break;
            case 'price':
                setPrice(target.value);
                current.price = target.value;                
                break;
            case 'size':
                setSize(target.value);
                current.size = target.value;
                break;                
            case 'breakfast':                
                setIsBreakfastOffered(target.checked);
                current.isBreakfastOffered = target.checked;
                break;                
            case 'pets':                
                setIsPetsAllowed(target.checked);
                current.istPetsAllowed = target.checked;
                break;
            default:
                return;
        }
        
        filteredRooms = ((current.type || type) === 'all') ? [...filteredRooms] : filteredRooms.filter(room => room.fields.type === (current.type || type));
        
        filteredRooms = filteredRooms.filter(room => room.fields.capacity <= (Number(current.guests) || Number(guests)));        
        filteredRooms = filteredRooms.filter(room => room.fields.price <= (Number(current.price) || Number(price)));        
        filteredRooms = filteredRooms.filter(room => room.fields.size <= (Number(current.size) || Number(size)));
                                                                                
        if (current.isBreakfastOffered !== undefined) {
            filteredRooms = current.isBreakfastOffered ? filteredRooms.filter(room => room.fields.breakfast) : [...filteredRooms];
        } else {
            filteredRooms = isBreakfastOffered ? filteredRooms.filter(room => room.fields.breakfast) : [...filteredRooms];
        }
        
        if (current.istPetsAllowed !== undefined) {
            filteredRooms = current.istPetsAllowed ? filteredRooms.filter(room => room.fields.pets) : [...filteredRooms];
        } else {
            filteredRooms = istPetsAllowed ? filteredRooms.filter(room => room.fields.pets) : [...filteredRooms];
        }
        
        setRooms(filteredRooms);
    }    

    useEffect(() => {
        setRooms(Data);
        setType("all");
        setGuests(1);
        setPrice(450);
        setSize(500);
        setIsBreakfastOffered(false);
        setIsPetsAllowed(false);
    }, []);

    return ( 
        <>
            <Front />       
            <div className="filteredRooms">
                <h1>Search Rooms</h1>
                <hr />
                <Filter 
                    handleChange={handleChange}                
                    price={price} 
                    size={size}                 
                />
                <Rooms data={rooms} />
            </div>
        </>
    )
}

export default FilteredRooms;