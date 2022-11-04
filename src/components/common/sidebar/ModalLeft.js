import React, { useRef, useState } from 'react';
// import styled from 'styled-components';
// import { AiOutlineClose } from "react-icons/ai";

import useOutSideClick from '../../../hooks/useOutSideClick'
import ModalContainer from '../modal/ModalContainer';
import './ModalLeft.css';

const ModalLeft = ({ onClose, children }) => {

    const modalRef = useRef(null);
  const handleClose = () => {
      onClose ?.();
  };
  useOutSideClick(modalRef, handleClose);

  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   $body.style.overflow = "hidden";
  //   return () => ($body.style.overflow = "auto")
  // } ,[]);

  return (
    <ModalContainer>
      <div className="overlays">
        <div className="modalWraps" ref={modalRef}>
          <div className = "contentss">{children}</div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default ModalLeft;