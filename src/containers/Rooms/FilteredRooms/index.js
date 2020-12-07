import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Filter from './Filter';
import Rooms from './Rooms';
import Data from '../../../Data/data';

function FilteredRooms() {    
    const [rooms, setRooms] = useState([]);
    const [type, setType] = useState("");
    const [guests, setGuests] = useState(0);
    const [price, setPrice] = useState(450);
    const [size, setSize] = useState(500);
    const [isBreakfastOffered, setIsBreakfastOffered] = useState(null);
    const [istPetsAllowed, setIsPetsAllowed] = useState(null);
    const stateRef = useRef();

    stateRef.current = {};
    
    const getPreferences = e => {
        const target = e.target;
        let filteredRooms = [...Data];        
        
        switch(target.id) {
            case 'type':
                if (target.value !== 'all') {
                    filteredRooms = filteredRooms.filter(room => room.fields.type === target.value);    
                    stateRef.current.type = target.value;                           
                } 
                setType(target.value);                
                break;
            case 'guests':
                filteredRooms = filteredRooms.filter(room => room.fields.capacity <= Number(target.value));
                setGuests(target.value);
                stateRef.current.guests = target.value;
                break;
            case 'price':
                filteredRooms = filteredRooms.filter(room => room.fields.price <= Number(target.value));
                setPrice(target.value);
                stateRef.current.price = target.value;
                console.log(filteredRooms)
                break;
            case 'size':
                filteredRooms = filteredRooms.filter(room => room.fields.size <= Number(target.value));
                setSize(target.value);
                stateRef.current.size = target.value;
                break;
                // case 'breakfast':
                //     filteredRooms = filteredRooms.filter(room => room.fields.breakfast === target.checked);
                //     console.log(target.checked)
                //     setIsBreakfastOffered(target.checked);
                //     stateRef.current.isBreakfastOffered = target.checked;
                //     break;
                case 'breakfast':                
                    filteredRooms = target.checked ? filteredRooms.filter(room => room.fields.breakfast) : [...filteredRooms];                    
                    setIsBreakfastOffered(target.checked);
                    stateRef.current.isBreakfastOffered = target.checked;
                    break;
                // case 'pets':
                //     filteredRooms = filteredRooms.filter(room => room.fields.pets === target.checked);
                //     setIsPetsAllowed(target.checked);
                //     stateRef.current.isPetsAllowed = target.checked;
                //     break;
                case 'pets':                
                    filteredRooms = target.checked ? filteredRooms.filter(room => room.fields.pets) : [...filteredRooms];                    
                    setIsPetsAllowed(target.checked);
                    stateRef.current.istPetsAllowed = target.checked;
                    break;
        }

        if (target.id !== 'type') {
            filteredRooms = (type === 'all') ? [...filteredRooms] : filteredRooms.filter(room => room.fields.type === (stateRef.current.type || type));
        }
        console.log(filteredRooms)
        filteredRooms = filteredRooms.filter(room => room.fields.capacity <= (Number(stateRef.current.guests) || Number(guests)));        
        filteredRooms = filteredRooms.filter(room => room.fields.price <= (Number(stateRef.current.price) || Number(price)));        
        filteredRooms = filteredRooms.filter(room => room.fields.size <= (Number(stateRef.current.size) || Number(size)));
        // filteredRooms = filteredRooms.filter(room => room.fields.breakfast === (stateRef.current.isBreakfastOffered || isBreakfastOffered));
        // filteredRooms = stateRef.current.isBreakfastOffered ? filteredRooms.filter(room => room.fields.breakfast)
        //                                                       : (isBreakfastOffered ? filteredRooms.filter(room => room.fields.breakfast)
        //                                                                             : [...filteredRooms]);
        if (stateRef.current.isBreakfastOffered !== undefined) {
            filteredRooms = stateRef.current.isBreakfastOffered ? filteredRooms.filter(room => room.fields.breakfast) : [...filteredRooms];
        } else {
            filteredRooms = isBreakfastOffered ? filteredRooms.filter(room => room.fields.breakfast) : [...filteredRooms];
        }
        // console.log(filteredRooms)
        // console.log(stateRef.current.isBreakfastOffered || isBreakfastOffered)
        // filteredRooms = filteredRooms.filter(room => room.fields.pets === stateRef.current.isPetsAllowed);
        // console.log(filteredRooms)
        if (stateRef.current.istPetsAllowed !== undefined) {
            filteredRooms = stateRef.current.istPetsAllowed ? filteredRooms.filter(room => room.fields.pets) : [...filteredRooms];
        } else {
            filteredRooms = istPetsAllowed ? filteredRooms.filter(room => room.fields.pets) : [...filteredRooms];
        }
        console.log(filteredRooms)
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
        <div className="filteredRooms">
            <h1>Search Rooms</h1>
            <hr />
            <Filter 
                getPreferences={getPreferences}                
                price={price} 
                size={size}                 
            />
            <Rooms data={rooms} />
        </div>
    )
}

export default FilteredRooms;