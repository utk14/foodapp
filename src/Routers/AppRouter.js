import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import RestaurantDetail from '../components/restaurantDetails';
import addCategory from '../components/AddCategory';
import CategoryCollect from "../components/CategoryCollection";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/restaurant_details/:id" component={RestaurantDetail} />
                <Route path="/Add_Category/:name" component={addCategory} />
                <Route path="/Category_Collection" component={CategoryCollect} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;