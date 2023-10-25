import React from 'react';
import shoppingCrt from './shopping-cart-svgrepo-com.svg';

const CheckoutPopup = ({ total, onCheckout, onCancel }) => {
  return (
    <div className="checkout-final">
      <p>Checkout Total:</p>
      <div>
        <span>
          <img src={shoppingCrt} alt="" />
        </span>
        <p>${total}</p>
      </div>
      <button onClick={onCheckout}>Checkout</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default CheckoutPopup;