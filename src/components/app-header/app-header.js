/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import icon from './icon.svg';
import './app-header.scss';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {cartWindowOpen} from '../../actions/';

const AppHeader = ({total, cartWindowOpen}) => {

    
    return (
        <header className='header'>
            <ul className='header-list'>
                <NavLink activeClassName="selected" exact to='/' className="header-list-link">All Menu</NavLink>
                <NavLink activeClassName="selected" exact to='/breakfasts' className="header-list-link">Breakfasts</NavLink>
                <NavLink activeClassName="selected" exact to='/bowls'className="header-list-link">Bowls</NavLink>
                <NavLink activeClassName="selected" exact to='/desserts' className="header-list-link">Desserts</NavLink>
                <NavLink activeClassName="selected" exact to='/drinks' className="header-list-link">Drinks</NavLink>
            </ul>

            <div className='header-cart' onClick={() => cartWindowOpen()}>
                <img className="header-cart-img" src={icon} alt="cart"></img>
                Bag ({total} $)
            </div>
            
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
};

const mapDispatchToProps = {
    cartWindowOpen
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);