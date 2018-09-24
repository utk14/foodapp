import React from 'react';

class searchBar extends React.Component {



    render() {
        return (
           <div className="jumbotron">

                <h1>One place for all your crave.</h1>
                <label className="col-form-label col-form-label-lg">Search for your hunger</label>
                <div className="form-group">
                        <input placeholder="Search here...." id="inputLarge" type="text" onChange={this.props.getquery}>
                        </input>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary btn-lg" 
                        onClick={this.props.fetch}>Search</button>
                    </div>
                </div>

        );
    }

}

export default searchBar;