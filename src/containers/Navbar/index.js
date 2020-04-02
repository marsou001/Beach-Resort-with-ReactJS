import React, { useState, useEffect } from 'react';
import './style.css';

function Navbar() {
    const [toggle, setToggle] = useState(false);    

    const smallWidth = window.innerWidth < 992;

    const change = smallWidth ?  (toggle ? "change" : "") : "";         

    const properties = {
        marginTop: toggle ? 10 : -135, 
        filter: toggle ? "alpha(opacity=100)" : "alpha(opacity=0)",
        MozOpacity : toggle ? 1 : 0,
        KhtmlOpacity: toggle ? 1 : 0,
        opacity: toggle ? 1 : 0,        
        WebkitTransition : toggle ? "opacity 0.2s 0.2s, margin-top 0.2s" : "opacity 0.2s, margin-top 0.2s 0.2s",
        MozTransition : toggle ? "opacity 0.2s 0.2s, margin-top 0.2s" : "opacity 0.2s, margin-top 0.2s 0.2s",
        MsTransition : toggle ? "opacity 0.2s 0.2s, margin-top 0.2s" : "opacity 0.2s, margin-top 0.2s 0.2s",
        OTransition : toggle ? "opacity 0.2s 0.2s, margin-top 0.2s" : "opacity 0.2s, margin-top 0.2s 0.2s",
        transition : toggle ? "opacity 0.2s 0.2s, margin-top 0.2s" : "opacity 0.2s, margin-top 0.2s 0.2s",
        pointerEvents : toggle ? "auto" : "none"        
    }

    const appear = smallWidth ? properties : {
        filter : "alpha(opacity=100)",
        MozOpacity : 1,
        KhtmlOpacity: 1,
        opacity: 1,
        marginTop: 10,
    }

    const toggleNavbar = () => {
        setToggle(!toggle);
    }   
    
    let resizeTimer;
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
    }, [window.innerWidth])

    return (
        <nav>
            <div className="container">
                <div id="logo">
                    <a href="#">Beach <span>Resort</span></a>
                </div>

                <div className="toggleBars" onClick={toggleNavbar}>                
                    <div className={`bar bar1 ${change}`}></div>
                    <div className={`bar bar2 ${change}`}></div>
                    <div className={`bar bar3 ${change}`}></div>
                </div>
            </div>

            <div className="links" style={appear}>
                <a href="#">Home</a>
                <a href="#">Rooms</a>
            </div>
        </nav>
    )
}

export default Navbar;