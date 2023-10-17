import React from 'react';

const CheckoutPopup = ({ total, onCheckout, onCancel }) => {
  return (
    <div className="popup">
      <p>Checkout Total: ${total}</p>
      <button onClick={onCheckout}>Checkout</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default CheckoutPopup;