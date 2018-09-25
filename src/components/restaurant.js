/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) =>{
        return (
            <div className="card">
                <img className="card-img-top" src={props.card.thumb} alt="Not found" /> 
                <div className="card-body">
                    <h2 className="card-title">{props.card.name}</h2>
                    <p className="card-text">{props.card.address.address}, {props.card.address.locality}, {props.card.address.city}</p>
                </div>
                <div className="card-footer">
                    <Link className="restlink" to={`restaurant_details/${props.card.id}`}>
                    <button type="button" className="btn btn-primary btn-lg">View Details</button> 
                    </Link><br/><br/>
                    <Link className="restlink" to={`Add_Category/${props.card.name}`}>
                    <button type="button" className="btn btn-primary btn-lg">Add To Category</button> 
                    </Link> 
                </div>
            </div>
           
        );
}
export default Card;