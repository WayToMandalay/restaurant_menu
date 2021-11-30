import React, { Component } from "react";
import {connect} from 'react-redux';
import WithRestoService from "../hoc";
import Spinner from "../spinner";
import './items-list.scss';
import { menuRequested, menuLoaded, onAddToCart } from '../../actions/';
import MenuListItem from '../menu-list-item/';

class ItemsList extends Component {

  componentDidMount() {
    const {menu, RestoService, menuRequested, menuLoaded} = this.props;

    if (menu.length === 0) {
      menuRequested();
      RestoService.getMenuItems()
        .then(res => menuLoaded(res))
        .catch(err => this.props.errorOccured())
    }
  }

  render() {
    const {loading, menu, onAddToCart} = this.props;

    if (loading) {
      return (<Spinner></Spinner>)
    }

    const path = this.props.match.params.path;
    
    const items = menu.filter(item => (item.category === path))
                      .map(item => {
                        return <MenuListItem menuItem={item} key={item.id} addToCart={()=>onAddToCart(item.id)}></MenuListItem>
                      });

    return (
      <>
        <div className='items-title'>{path}</div>
        <View items={items}></View>
      </>
    )
  }
  
}

const View = ({items}) => {
  return (
    <ul className='items-list'>{items}</ul>
  )
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    loading: state.loading
  }
}

const mapDispatchToProps = {
  menuRequested,
  menuLoaded,
  onAddToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemsList));