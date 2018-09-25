/* eslint react/prop-types: 0 */
import React from 'react';

const searchBar = (props) => {

        return (
           <div className="jumbotron">
                <h1>One place for all your crave.</h1>
                <h2>Search for your hunger</h2>
                <div className="form-group">
                        <input placeholder="Search here...." 
                               id="inputLarge" type="text" 
                               onChange={props.getquery}>
                        </input>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary btn-lg" 
                        onClick={props.fetch}>Search</button>
                    </div>
                </div>

        );
    }

export default searchBar;