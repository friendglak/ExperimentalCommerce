import React, { useState } from 'react';
import { ModalOverlay, ModalWrap } from '../style/ModalStyles';


const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <ModalOverlay onClick={() => toggleModal()} />,
    <ModalWrap >
      <Modal >
        {children}
      </Modal>
    </ModalWrap>
  ];
}

export default Modal;