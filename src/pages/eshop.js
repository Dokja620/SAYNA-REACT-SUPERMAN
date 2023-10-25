import React, { useState } from 'react';
import arrowDown from '../assets/flèche_down_header.png';
import shoppingCart from '../assets/shopping-cart-svgrepo-com.svg';
import Product from './sub-eshop/Product';
import ConfirmationPopup from './sub-eshop/ConfirmationPopup';
import CheckoutPopup from './sub-eshop/CheckoutPopup';

import Filter from './sub-eshop/filter';

const products = [
    { id: 1, name: 'Lego superman', price: 5, image: require('../assets/produits/001.png') },
    { id: 2, name: 'Figurine Superman', price: 15, image: require('../assets/produits/002.png') },
    { id: 3, name: 'Pack Superman 6 pièces', price: 30, image: require('../assets/produits/003.png') },
    { id: 4, name: 'Sac à dos avec cape', price: 20, image: require('../assets/produits/004.png') },
    { id: 1, name: 'Mug Superman', price: 7, image: require('../assets/produits/001.png') },
    { id: 2, name: 'Cape de Superman', price: 10, image: require('../assets/produits/002.png') },
    { id: 3, name: 'Carte Superman collector', price: 50, image: require('../assets/produits/003.png') },
    { id: 4, name: 'Montre Superman', price: 25, image: require('../assets/produits/004.png') },
    // Add more products with images
];

const EShop = () => {
    const [cart, setCart] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

    const addToCart = (product) => {
        // Check if the product is already in the cart
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            // If the product is in the cart, update its quantity
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            // If the product is not in the cart, add it
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map((item) =>
            item.id === productId
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map((item) =>
            item.id === productId
                ? { ...item, quantity: Math.max(1, (item.quantity || 2) - 1) }
                : item
        );
        setCart(updatedCart);
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0);
    };

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    const showConfirmation = () => {
        setShowConfirmationPopup(true);
    };

    const hideConfirmation = () => {
        setShowConfirmationPopup(false);
    };

    const showCheckout = () => {
        setShowCheckoutPopup(true);
    };

    const hideCheckout = () => {
        setShowCheckoutPopup(false);
    };

    const handleCheckout = () => {
        // Perform the actual checkout logic here
        hideCheckout(); // Close the checkout popup
        hideConfirmation(); // Close the confirmation popup
        setCart([]); // Reset the cart to an empty array
        toggleCart(); // Close the cart panel
        alert('Thanks for purchasing!');
    };

    return (
        <div>
            <div id="shop-first" className='page'>
                <h1>ENVIE D'UN SLIP JAUNE ?</h1>
            </div>
            <div className="below">
                <img src={arrowDown} alt="" />
            </div>
            <div id="shop-second" className='page'>
                <div className="cart" onClick={toggleCart}>
                    <div className="cartbtn">
                        <img src={shoppingCart} alt="" />
                        <p className='buy'>{cart.length}</p>
                    </div>
                </div>
                <Filter />
                {cartVisible && !showConfirmationPopup && !showCheckoutPopup && (
                    <div className="cart-panel">
                        <div className="cart-content">
                            <button onClick={toggleCart} className="close-button">X</button>
                            <div className="empty"></div>
                            {cart.map((product) => (
                                <div key={product.id} className="cart-item">
                                    <div className="leftc">
                                        <p>{product.name}</p>
                                        <p>${product.price}</p>
                                    </div>
                                    <div className="rightc">
                                        <button onClick={() => removeFromCart(product.id)}>Retirer</button>
                                        <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                        <span className='quant'>{product.quantity || 1}</span>
                                        <button onClick={() => increaseQuantity(product.id)}>+</button>
                                    </div>
                                </div>
                            ))}
                            <div className="empty"></div>
                        </div>
                        <button className='checkout-btn' onClick={showConfirmation}>Payer</button>
                    </div>
                )}
                {showConfirmationPopup && (
                    <ConfirmationPopup
                        onConfirm={() => {
                            showCheckout();
                            hideConfirmation();
                        }}
                        onCancel={hideConfirmation}
                    />
                )}
                {showCheckoutPopup && (
                    <CheckoutPopup
                        total={calculateTotal()}
                        onCheckout={() => {
                            handleCheckout();
                            hideCheckout();
                        }}
                        onCancel={hideCheckout}
                    />
                )}

                <div className="shop">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            onAddToCart={addToCart}
                            image={product.image}
                        />)
                    )}
                </div>
            </div>
        </div>
    );
};

export default EShop;
