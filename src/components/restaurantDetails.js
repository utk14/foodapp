/* eslint react/prop-types: 0 */
/*global fetch: true*/
import React from 'react';

class RestaurantDetails extends React.Component{
    
    constructor(props){
        super(props);
        this.state= { details:{}};
        this.fetchDetails();
    }
    //cdf947e7e5393e2d048d924ff766f3de

fetchDetails() 
{
    fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + this.props.match.params.id, {
            headers: {
                "user-key": ""
            }
        }).then(response => response.json())
            .then(details => {
                this.setState({
                    details: details
                })
            });
}

render(){

        const RestDetails = this.state.details;
    return(
            <div>
                <div className="card">
                    <img className="card-img-top" src={RestDetails.thumb} alt="Not found" />
                    <div className="card-body">
                        <h3 className="card-title">{RestDetails.name}</h3>
                        <h4>Cost For Two: Rs {RestDetails.average_cost_for_two}</h4>
                        <h4>Check out the <a href={RestDetails.menu_url} className="btn btn-default"> menu</a>:</h4>
                    </div>
                    <a href={RestDetails.url} role="button" className="btn btn-danger">Click to order</a>
                </div>

            </div>
    );
}
}

export default RestaurantDetails;