import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, onAddToCart, image }) => {
  return (
  <div className="buy">
    <div className="product-card">
      <div className="product-img">
        <Link to="/infos">
          <img src={image} alt={product.name} />
        </Link>
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}€</p>
    </div>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
  );
}

export default Product;
