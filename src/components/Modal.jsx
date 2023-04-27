import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

import Close from "../svg/close";

const CreateModal = ({ children, onClose }) => {
  const modal = useRef();

  return (
    <div
      ref={modal}
      aria-modal="true"
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 p-4 flex justify-center items-center"
    >
      <div className="relative bg-white rounded-md w-full max-w-lg p-2">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full text-black p-1 shadow-md"
        >
          <Close width="24" height="24" />
        </button>

        {children}
      </div>
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <CreateModal children={children} onClose={onClose} />,
        document.body
      )}
    </>
  );
};

export default Modal;
