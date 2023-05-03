import '../css/Project.css';

import React, { useRef } from "react";
import ReactDom from "react-dom";

export const ResearchMethodModal=({ setShowDesc, img, desc, name}) => {
  const modalRef=useRef();
  
  const closeDesc=(e) => {
    if (e.target === modalRef.current) {
      setShowDesc(false);
    }
  };

  return ReactDom.createPortal(

    <div className="modal-background" ref={modalRef} onClick={closeDesc}>
      <div className="song-desc-modal">
      <div class="song-desc-modal-header">
        <div class="song-desc-modal-title">{name}</div>
        <div>
          <img className="close-modal-button-song" src="./content/Images-Profile/closebutton.png" alt="a pink circle with a black x in the middle" onClick={() => setShowDesc(false)}/>
        </div>
      </div>

        <img class="song-desc-modal-img" src={img} alt="the same image that was opened"></img>
          <div class="song-desc-modal-caption">{desc}</div>
        </div>
    </div>,
   
    document.getElementById("song-description")
  );
}