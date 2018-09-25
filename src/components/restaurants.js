/* eslint react/prop-types: 0 */
import React from 'react';
import Restaurant from './restaurant';

const restaurantCard = (props) => {

    return (
        <div className="container-fluid">
            <div className="flex">
                {
                   props.results.map(function (element) {
                    return <Restaurant key={element.id} card={element} />
                    })
                }
            </div>
        </div>
    );
}

export default restaurantCard; 