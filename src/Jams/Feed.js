import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';
import '../css/Project.css';

import {JamPostsData} from "./JamPostData"
import Posting from "./Posting";
import Toggles from "./Toggles.js";



export default function Feed () { /* the function for the discography section */

  const allCategories=[...new Set(Object.values(JamPostsData).map((z) => z.category))];
  const [currentCat, setCurrentCat]=useState("Top") /* use this category at first */

  

  const currentProjects=Object.values(JamPostsData).filter((newProject) => { /* getting an array of project values based on toggle clicked */
    return newProject.category === currentCat; 
  });

  return (
    <div>

      <Toggles currentCat={currentCat} setCurrentCat={setCurrentCat} allCategories={allCategories} />  {/* render toggles */}

      <div className="feed">
          {currentProjects.map(p => {
            
            return <Posting {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
            
          })
          }
          
      </div>

    </div>
  );
}


