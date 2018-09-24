import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) =>{
        return (
           
            <div className="card">
                <img className="card-img-top" src={props.card.thumb} alt="Image Not found" /> 
                <div className="card-body">
                    <h2 className="card-title">{props.card.name}</h2>
                    <p className="card-text">{props.card.address.address}, {props.card.address.locality}, {props.card.address.city}</p>
                   
                </div>
                <div className="card-footer">
                    {/* <a href={props.card.url} className="btn btn-primary btn-lg">Visit!</a> <br/><br/> */}
                    <Link className="restlink" to={`restaurant1_details/${props.card.id}`}>
                    <Button >Details</Button>
                    </Link>
                    <button type="button" className="btn btn-primary btn-lg">Add to category</button> 
                </div>
            </div>
           
        );
}
export default Card;