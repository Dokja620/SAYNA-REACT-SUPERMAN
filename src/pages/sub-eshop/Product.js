import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, onAddToCart, image }) => {
  return (
    <div className="product-card">
      <Link to="/infos">
        <img src={image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
