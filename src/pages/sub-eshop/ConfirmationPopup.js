// ConfirmationPopup.js

import React from 'react';

const ConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <p>Êtes vous sûr de ce choix ?</p>
      <button onClick={onConfirm}>Je suis sûr</button>
      <button onClick={onCancel}>Je ne suis plus sûr</button>
    </div>
  );
};

export default ConfirmationPopup;
