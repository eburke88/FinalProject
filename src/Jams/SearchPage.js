import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';
import '../css/Project.css';

import {JamPostsData} from "./JamPostData"
import Header from "../AppComponents/Header.js";
import Search from "../AppComponents/Search.js";
import Toggles from "./Toggles.js";



export default function SearchPage () { /* the function for the discography section */

  const allCategories=[...new Set(Object.values(JamPostsData).map((z) => z.category))];
  const [currentCat, setCurrentCat]=useState("Top") /* use this category at first */

  

  const currentProjects=Object.values(JamPostsData).filter((newProject) => { /* getting an array of project values based on toggle clicked */
    return newProject.category === currentCat; 
  });

  return (
    <div>
        <Header />
        <Search />
        <div className="page-content">
            <Toggles currentCat={currentCat} setCurrentCat={setCurrentCat} allCategories={allCategories} />  {/* render toggles */}
        </div>
    </div>
  );
}

