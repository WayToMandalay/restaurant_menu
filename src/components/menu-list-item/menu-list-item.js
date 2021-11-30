import React from "react";
import './menu-list-item.scss';
import btn from './menu-btn.svg';
import {Link} from 'react-router-dom';

const MenuListItem = ({menuItem, addToCart}) => {

    const {title, price, weight, url, id} = menuItem;

    return (
        <>
            <li className="menu-item">
                <Link className='menu-item-link' to={`/item/${id}`}><img className='menu-img' src={url} alt={title}></img></Link>
                <div className='menu-line menu-line-title'>
                    <div className='menu-item-title'>{title}</div>
                    <span>{weight}g</span>
                </div>
                <div className='menu-line'>
                    <div className='menu-price'>${price}</div>
                    <button onClick={() => addToCart()} style={{background: `url(${btn}) center`}} className='menu-btn'></button>
                </div>
            </li>
            
        </>
    )
}

export default MenuListItem;