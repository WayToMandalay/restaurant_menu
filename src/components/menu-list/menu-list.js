import React, {Component} from "react";
import './menu-list.scss';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc/';
import { menuLoaded, menuRequested, errorOccured, onAddToCart } from '../../actions/';
import {connect} from 'react-redux';
import Spinner from '../spinner/';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(err => this.props.errorOccured())
    }

    getItems(menu, category) {
        const {onAddToCart} = this.props;

        const items = menu
            .filter(item => item.category === category)
            .map((item) => {
                return <MenuListItem  menuItem={item} key={item.id} addToCart={()=>onAddToCart(item.id)}/>
            })
        return items;
    }
    
    render() {
        const {menuItems, loading} = this.props;

        if (loading) {
            return (
                <Spinner></Spinner>
            )
        }
        
        const breakfasts = this.getItems(menuItems, 'breakfasts');
        const bowls = this.getItems(menuItems, 'bowls');
        const desserts = this.getItems(menuItems, 'desserts');
        const drinks = this.getItems(menuItems, 'drinks');
        
        return (
            <>
                <View items={breakfasts}></View>
                <View items={bowls}></View>
                <View items={desserts}></View>
                <View items={drinks}></View>
            </>
        )
    }
}

const View = ({items}) => {
    const title = items[0].props.menuItem.category
    return (
        <>
            <div className="menu-title">{title}</div>
            <ul className="menu-list">
                {items}
            </ul>
        </>
        
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (v) => {
            dispatch(menuLoaded(v))
        },
        menuRequested: () => dispatch(menuRequested()),
        errorOccured: () => dispatch(errorOccured()),
        onAddToCart: (id) => {
            dispatch(onAddToCart(id))
        }
    }
    
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));