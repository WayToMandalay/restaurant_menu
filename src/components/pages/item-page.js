import React, {Component} from "react";
import './item-page.scss';
import {connect} from 'react-redux';
import {menuRequested, menuLoaded, errorOccured} from '../../actions/';
import Spinner from "../spinner";
import WithRestoService from '../hoc/';

class ItemPage extends Component  {

  componentDidMount() {
    const {menuItems, RestoService, menuLoaded} = this.props;
    if (menuItems.length === 0) {
      this.props.menuRequested();

      RestoService.getMenuItems()
        .then(res => menuLoaded(res))
        .catch(err => this.props.errorOccured())
    }
  }

  render() {
    const {loading} = this.props;

    if (loading) {
      return (
        <Spinner></Spinner>
      )
    }
    const {menuItems} = this.props;
    
    const id = +this.props.match.params.id;
    const {url, title, price, weight, ingredients} = menuItems[id-1];


    return (
      <>
        <li className="item_page">
              <img className='item_page-img' src={url} alt='alt'></img>
              
              <div className="item_page-info">
                <div className='item_page-title'>{title}</div>
                <span>{weight}g</span>
                <div className='item_page-price'>${price}</div>
                <div className="item_page-ingredients">{ingredients}</div>
              </div>
          </li>
      </>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading
  }
};

const mapDispatchToProps =  {
  menuLoaded,
  menuRequested,
  errorOccured
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));