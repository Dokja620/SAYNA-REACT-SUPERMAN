// ConfirmationPopup.js
import React from 'react';

const ConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <p>Are you sure you want to proceed with the purchase?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ConfirmationPopup;
