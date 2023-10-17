import React from 'react';
import Close from './close-svgrepo-com.svg';


const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Êtes vous sûr de vouloir vous déconnecter ?</p>
        <button onClick={onConfirm}>Confirmer</button>
        <button onClick={onClose} className='Close'><img src={Close} alt="" /></button>
      </div>
    </div>
  );
};

export default ConfirmationModal;