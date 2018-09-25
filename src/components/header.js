import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';


const Nav = () => {

    return (
        <AppBar>
            <div className="row">
                <div className="col-lg-10">
                    <h2>FoodieApp</h2>
                </div>
                <div className="col-lg-2">
                    <Link className="catlink" to={`/Category_Collection`}>
                        <button type="button" className="btn btn-primary btn-lg">View Category</button>
                    </Link>
                </div>
            </div>

        </AppBar>
    );
}
export default Nav;

