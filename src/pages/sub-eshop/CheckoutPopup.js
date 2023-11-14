import React from 'react';
import shoppingCrt from './shopping-cart-svgrepo-com.svg';

const CheckoutPopup = ({ total, onCheckout, onCancel }) => {
  return (
    <div className="checkout-final">
      <p>Total à Payer:</p>
      <div>
        <span>
          <img src={shoppingCrt} alt="" />
        </span>
        <p>${total}</p>
      </div>
      <button onClick={onCheckout}>Payer</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default CheckoutPopup;