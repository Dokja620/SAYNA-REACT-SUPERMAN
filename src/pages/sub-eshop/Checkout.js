import React from 'react';

function Checkout({ cart, total, handlePayment }) {
  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Qty: {item.quantity})
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={handlePayment}>Fake Payment</button>
    </div>
  );
}

export default Checkout;
