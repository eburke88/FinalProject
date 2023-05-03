
import '../css/Project.css';

import React, { useRef } from "react";
import ReactDom from "react-dom";

export const Modal=({ setShowModal, img }) => {
  const modalRef=useRef();
  
  const closeModal=(e) => { {/* if clicked, close modal */}
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(

    <div className="modal-background" ref={modalRef} onClick={closeModal}> {/* close modal when clicked outside */}
      <div className="modal">
        <img class="modal-img" src={img} alt="the same image that was opened"></img>
        <img className="close-modal-button-image" src="./content/Images-Profile/closebutton.png" alt="a pink circle with a black x in the middle" onClick={() => setShowModal(false)}/>
      </div>
    </div>,

    document.getElementById("portal")
  );
}