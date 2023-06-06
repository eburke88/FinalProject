import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';

import {Link}
from "react-router-dom";

import React,{useState} from 'react';

export default function ProjectEntry(props) { /* */

    let link;
    if (props.name === "ReXplore") { /* creating path for custom page */
        link=`ReXplore`
    } else {
        link=`/Project?name=${props.name}`
    }

    const [hover, setHover]=useState(false)

    return (
        <Link to={link}>
            <button className="section-entry"  onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
                <img className="entry-image" src={"./FinalProject/content/" + props.headerSrc} alt={props.headerAlt}/> {/* dynamically render image based on project */}
                <img className={`play-entry-button ${hover ? "Show" : ""}`} src="./FinalProject/content/Images-Profile/playbutton.png" alt="a pink circle button with black play button in the middle, with some drop shadow"/>
                <div className="entry-title">{props.name}</div>
                <div className="entry-desc">{props.tagline}</div> 
            </button>
           
        </Link>

    );

};

