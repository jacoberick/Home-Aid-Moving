import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ type, active, src, modal, setModal }) => {
  return (
    <div
      className={`modal-container ${active ? "active" : "d-none"}`}
      onClick={() => setModal({ ...modal, active: 0, src: null })}
    >
      <div className="wrapper">
        <button name="close">
          <FontAwesomeIcon className="icon" icon={faTimes} />
        </button>
        <img src={src} alt="Home-Aid Service" />
      </div>
    </div>
  );
};

export default Modal;
