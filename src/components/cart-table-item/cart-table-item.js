import React from "react";
import './cart-table-item.scss';

const CartTableItem = ({item, incr, decr, del}) => {

  const {title, amount, price} = item;
  return (
    <>
      <li className="cart-table-item">
        <div onClick={()=>del()} className="cart-table-item-close">&#11198;</div>
        <div className="cart-table-item-header">
            <div className="cart-table-semititle">
                {title}
            </div>
            <div className="cart-table-price">
                ${price}
            </div>
        </div>

        <div className="cart-table-item-amount">
            <div onClick={()=>decr()} className="cart-table-item-minus">&#8722;</div>
            <div>{amount}</div>
            <div onClick={()=>incr()} className="cart-table-item-plus">+</div>
        </div>              
      </li>
    </>
  )
}

export default CartTableItem;
