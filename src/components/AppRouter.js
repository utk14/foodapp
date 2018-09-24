import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import RestaurantDetail from '../components/restaurantDetails';

const AppRouter = () =>
{
    <BrowserRouter>
    <div>
        <switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/restaurant_details/:id" component={RestaurantDetail}/>
            </switch></div></BrowserRouter>
}

export default AppRouter;