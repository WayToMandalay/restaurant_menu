import React from "react";
import './app.scss';
import AppHeader from '../app-header'
import {MainPage, CartPage} from '../pages';
import CartWindow from "../cart-window";
import { Switch, Route, withRouter } from "react-router";
import ItemPage from "../pages/item-page";
import ItemsList from "../pages/items-list";

const App = () => {


    return (
        <div className="app">
            <AppHeader></AppHeader>
             <Switch>
                <Route path='/' exact component={MainPage}></Route>
                <Route path='/cart' exact component={CartPage}></Route>
                <Route path='/:path' component={ItemsList}></Route>
                <Route path='/item/:id' exact component={ItemPage}></Route>
                
            </Switch> 
            
            <CartWindow></CartWindow>
        </div>
    )
};

export default withRouter(App);