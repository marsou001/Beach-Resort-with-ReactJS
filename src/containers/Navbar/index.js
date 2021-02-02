import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let resizeTimer;

function Navbar() {
    const [toggle, setToggle] = useState(false);    

    const smallWidth = window.innerWidth < 992;

    const MARGIN_TOP_FIRST = "opacity 0.2s 0.2s, margin-top 0.2s",
             OPACITY_FIRST = "opacity 0.2s, margin-top 0.2s 0.2s";

    const change = smallWidth ?  (toggle ? "change" : "") : "";   
    
    const toggledProperties = {
        marginTop: 10, 
        MsFilter: "'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)'",
        filter: "alpha(opacity=100)",
        MozOpacity : 1,
        KhtmlOpacity: 1,
        opacity: 1,        
        WebkitTransition : MARGIN_TOP_FIRST,
        MozTransition : MARGIN_TOP_FIRST,
        MsTransition : MARGIN_TOP_FIRST,
        OTransition : MARGIN_TOP_FIRST,
        transition : MARGIN_TOP_FIRST,
        pointerEvents : "auto"     
    }

    const notToggledProperties = {
        marginTop: window.innerWidth > 992 ? -120 : -110, 
        MsFilter: "'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'",
        filter: "alpha(opacity=0)",
        MozOpacity : 0,
        KhtmlOpacity: 0,
        opacity: 0,        
        WebkitTransition : OPACITY_FIRST,
        MozTransition : OPACITY_FIRST,
        MsTransition : OPACITY_FIRST,
        OTransition : OPACITY_FIRST,
        transition : OPACITY_FIRST,
        pointerEvents : "none" 
    }    

    const properties = toggle ? toggledProperties : notToggledProperties;

    const appear = smallWidth ? properties : {
        MsFilter: "'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)'",
        filter : "alpha(opacity=100)",
        MozOpacity : 1,
        KhtmlOpacity: 1,
        opacity: 1,
        marginTop: 0,
    }

    const toggleNavbar = () => {
        setToggle(!toggle);
    }           

    useEffect(() => {
        window.addEventListener("resize", () => {
            document.body.classList.add("resize-animation-stopper");
            if (resizeTimer) {
                clearTimeout(resizeTimer);
            }
            resizeTimer = setTimeout(() => {
                document.body.classList.remove("resize-animation-stopper");
            }, 400);
            setToggle(window.innerWidth > 992 ? true : false);
        })
    }, [])

    return (
        <nav>
            <div className="container">                
                <div id="logo">
                    <Link to="/">Beach <span>Resort</span></Link>
                </div>                

                <div className="toggleBars" onClick={toggleNavbar}>                
                    <div className={`bar bar1 ${change}`}></div>
                    <div className={`bar bar2 ${change}`}></div>
                    <div className={`bar bar3 ${change}`}></div>
                </div>
            </div>

            <div className="links" style={appear}>
                <Link to="/">Home</Link>
                <Link to="/rooms">Rooms</Link>
            </div>
        </nav>
    )
}

export default Navbar;