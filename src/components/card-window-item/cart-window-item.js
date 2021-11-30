import React from "react";
import './cart-window-item.scss';

const CartWindowItem = ({item, inc, dec, del}) => {

    const {title, price, amount} = item;
    return (
        <>
            <li className="cart-window-item">
                <div onClick={()=>del()} className="cart-window-item-close">&#11198;</div>
                <div className="cart-window-item-header">
                    <div className="cart-window-semititle">
                        {title}
                    </div>
                    <div className="cart-window-price">
                        ${price}
                    </div>
                </div>

                <div className="cart-window-item-amount">
                    <div onClick={()=>dec()} className="cart-window-item-minus">&#8722;</div>
                    <div>{amount}</div>
                    <div onClick={()=>inc()} className="cart-window-item-plus">+</div>
                </div>              
            </li>

        </>  
    );
};

export default CartWindowItem;