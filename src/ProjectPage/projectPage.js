import Embed from "./Embed.js"

import { Projects } from "./ProjectData.js"

import Header from "./Header.js"

import React, { useState } from 'react';

import { useLocation }
  from "react-router-dom";

import Image from "./Image.js"
import Video from "./Video.js"

export default function ProjectPage() { /* template for a project paage that will be filled with different content */

  const { search }=useLocation();
  const query=new URLSearchParams(search);
  const name=query.get("name"); /* retrieve project name from URL */

  const currentProject=Projects[name]; /* set current project to that project */

  const [hover, setHover]=useState(false)

  return (

   

    <div>
    
      <Header type={currentProject.category} title={name} desc={currentProject.headerTag} src={"./content/" + currentProject.headerSrc} alt={currentProject.headerAlt} link={currentProject.link} />
      <div className="page-content">
      <div className="section-title">Description</div>
      <div className="description-box">{currentProject.desc}</div>
        <div className="project-section">
          <div className="content-flex">
            {currentProject.embeds.map(p => ( /* load embeds from projectdata into flex box  */
              <Embed {...p} />
            ))
            }
           
          </div>
          
        </div>

        <div className="project-section">
          <div className="content-flex">
            {currentProject.videos.map(p => ( /* load videos from projectdata  */
              <Video {...p} />
            ))
            }
           
          </div>
          
        </div>

        


          {
            Object.entries(currentProject.imageSections).map(([sectionName, imageArray]) => ( /* retrieve images from project and break them up into divs by their section*/
              <div className="project-entry" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="section-title">{sectionName}</div>
                <div className="content-flex">
                  {imageArray.map(p => ( /* load images from projectdata  */
                    <Image {...p} />
                  ))
                  }
                </div>
              </div>
            ))
          }

        </div>

        <div id="portal"></div>
      
      </div>
  );

}