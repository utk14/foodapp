/* eslint react/prop-types: 0 */
/*global localStorage: true */

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let categoryList = [];

class AddToCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            categoryAdded: ""
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.inputCategoryChange= this.inputCategoryChange.bind(this);
        this.addNewCategory= this.addNewCategory.bind(this);
        this.addRestaurantToExistingCat= this.addRestaurantToExistingCat.bind(this);
        this.existingCategory= this.existingCategory.bind(this);
    }

    handleClickOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };

    inputCategoryChange(event) {
        this.setState({ categoryAdded: event.target.value });
    }

    addNewCategory() 
    { 
        //to add category to local storage
        const restaurantList = [];
        // user input category
        const categoryName = this.state.categoryAdded;
        // restaurant name from route  
        const restName = this.props.match.params.name; 
        if (localStorage.getItem(categoryName) != null) 
        { 
            // if category exist .. fetch and push new restaurant name
            restaurantList.push(localStorage.getItem(categoryName));
            restaurantList.push(restName);
            localStorage.setItem(categoryName, restaurantList);
        } 
        else
         {
              // pushed restaurnt name in new category name 
            localStorage.setItem(categoryName, restName);            
            // alert(restName 
            //     + " successfully added to " 
            //     + categoryName 
            //     + ". To see category details check click Show Category");
        }
        this.handleClose();
    }

    addRestaurantToExistingCat(categoryName) 
    { //to add restaurant to existing category
        const restaurantList = [];
        const restName = this.props.match.params.name; 
        // restaurant name from route
        restaurantList.push(localStorage.getItem(categoryName));
        restaurantList.push(restName);
        localStorage.setItem(categoryName, restaurantList);
        // alert(restName + " successfully added to " 
        // + categoryName 
        // + ". To see category details check click Show Category");

    }

    existingCategory() {
        categoryList = [];
        for (let i = 0; i < localStorage.length; i += 1) 
        { //lopp through local storage key value pair
            if (localStorage.key(i) !== "loglevel:webpack-dev-server") 
            {
                let v = i;
                categoryList.push(
                    <button type="button" className="btn btn-primary btn-lg" key={v} onClick={() => 
                    { 
                    this.addRestaurantToExistingCat(localStorage.key(v)) }}>
                        {localStorage.key(v)}
                    </button> //key has category name 
                );
            }
        }
        this.setState({ //to re-render the component 
        });
    }

    render() {
        return (
            <div>
                <div>Add {this.props.match.params.name} to : </div><br/>
                <div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.handleClickOpen}>
                    New Category</button>
                </div><br/>
                <div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.existingCategory}
                    >Existing Category</button>
                    {categoryList.map(data => data)}
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                    Category Details : </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter name of category to add :
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            // label="Enter category name"
                            type="text"
                            fullWidth
                            onChange={this.inputCategoryChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.handleClose} color="primary">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.addNewCategory} color="primary">
                            Add Category
                        </button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddToCategory;