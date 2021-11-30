import React, { Component } from "react";
import './cart-window.scss';
import CartWindowItem from '../card-window-item';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {onRemoveFromCart, incrInCart, decrInCart, cartWindowClose} from '../../actions/';

class CartWindow extends Component {
    
    
    render() {

        const {cartWindowOpen} = this.props;
        
        if (!cartWindowOpen) {
            return (
                <></>
            )
        }


        const {total, cart, onRemoveFromCart, incrInCart, decrInCart, cartWindowClose} = this.props;

        let items = cart.map(item => {
            return <CartWindowItem 
            item={item} 
            key={item.id} 
            inc={()=>incrInCart(item.id)} 
            dec={()=>decrInCart(item.id)} 
            del={()=>onRemoveFromCart(item.id)}>
            </CartWindowItem>
        });

        if (items.length === 0) {
            items = <View></View>;
        }

        return (
            <div className="cart-bg" onClick={(e)=>cartWindowClose(e.target)}>
                <div className="cart-window">
                    <div className="cart-close-btn">&#9587;</div>
                    <div className="cart-window-title">Your bag</div>
                    <ul className="cart-window-list">
                        {items}
                    </ul>
                    <div className="cart-window-line">
                        <div>Delivery</div>
                        <div>FREE</div>
                    </div>
                    <div className="cart-window-line">
                        <div>Subtotal</div>
                        <div className="cart-window-total">${total}</div>
                    </div>
                    <div className="cart-window-order">
                        <Link to='/cart'><div className="cart-window-btn">Checkout</div></Link>
                    </div>
                </div>
            </div>
        )
    }
    
};


const View = () => {
    return(<h2>Your cart is empty</h2>)
}
 


const mapStateToProps = (state) => {
    return {
        total: state.total,
        cart: state.cart,
        cartWindowOpen: state.cartWindowOpen
    }
};

const mapDispatchToProps = {
    onRemoveFromCart,
    incrInCart,
    decrInCart,
    cartWindowClose
}

export default connect(mapStateToProps, mapDispatchToProps)(CartWindow);