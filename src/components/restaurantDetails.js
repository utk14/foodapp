import React from 'react';

class RestaurantDetails extends React.Component{
    constructor(props){
        super(props);
        this.state= { RestaurantDetails: []};
    }

componentDidMount()
{
    const RestaurantId = this.props.match.params.id;

    var url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${RestaurantId}`;
    fetch(url,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'user-key': 'cdf947e7e5393e2d048d924ff766f3de'
        }
    })
    .then(response => response.json())
    .then(RestaurantDetails => {this.setstate(() => ({RestaurantDetails}));})
}

render(){
    
        const restDetails = this.state.RestaurantDetails;
    return(

        <div className="card">
            <img className="card-img-top" src={restDetails.thumb} alt="Image Not found" />
            <div className="card-body">
                <h2 className="card-title">{restDetails.name}</h2>
                <p className="card-text">{restDetails.address.address}, {restDetails.card.address.locality}, {props.card.address.city}</p>

            </div>
            <div className="card-footer">
                <a href={restDetails.url} className="btn btn-primary btn-lg">Visit!</a> <br /><br />
                {/* <button type="button" className="btn btn-primary btn-lg">Add to category</button> */}
            </div>
        </div>
    );
}
}

export default RestaurantDetails;