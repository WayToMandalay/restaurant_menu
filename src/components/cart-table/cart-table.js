import React, {Component} from "react";
import './cart-table.scss';
import CartTableItem from '../cart-table-item';
import {connect} from 'react-redux';
import {incrInCart, decrInCart, onRemoveFromCart} from '../../actions/';

class CartTable extends Component {
    
    render() {

        const {incrInCart, decrInCart, onRemoveFromCart, total} = this.props;

        const items = this.props.cartItems.map(item => {
            return <CartTableItem 
            item={item} 
            key={item.id} 
            incr={()=>incrInCart(item.id)} 
            decr={()=>decrInCart(item.id)}
            del={()=>onRemoveFromCart(item.id)}
            />
        })

        return (
            <div className="cart-table">
                <div className="cart-table-form">LEFT PART</div>
                <div className="cart-table-form">
                    <div className="cart-table-window">
                        
                        <div className="cart-table-title">Your Order</div>
                        <ul className="cart-table-list">
                            {items}
                        </ul>
                        <div className="cart-table-line">
                            <div>Delivery</div>
                            <div>FREE</div>
                        </div>
                        <div className="cart-table-line">
                            <div>Subtotal</div>
                            <div className="cart-table-total">${total}</div>
                        </div>
                        <div className="cart-table-order">
                            <button className="cart-table-btn">Submit Order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.total
    }
}

const mapDispatchToProps = {
    incrInCart,
    decrInCart,
    onRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);