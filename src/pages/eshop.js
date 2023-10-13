import React from 'react';

import arrowDown from '../assets/flèche_down_header.png';
import shoppingCart from '../assets/shopping-cart-svgrepo-com.svg';

const eShop = () => {
    return ( 
        <div>
            <div id="shop-first" className='page'>
                <h1>ENVIE D'UN SLIP JAUNE ?</h1>
            </div>
            <div className="below">
                <img src={arrowDown} alt="" />
            </div>
            <div id="shop-second" className='page'>
                <div className="cart"><img src={shoppingCart} alt="" /></div>


            </div>
        </div>
    );
}
 
export default eShop;
