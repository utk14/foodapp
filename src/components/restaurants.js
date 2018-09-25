/* eslint react/prop-types: 0 */
import React from 'react';
import Card from './restaurant';

const Cards = (props) => {

    return (
        <div className="container-fluid">
            <div className="flex">
                {
                   props.results.map(function (element) {
                    return <Card key={element.id} card={element} />
                    })
                }
            </div>
        </div>
    );
}

export default Cards; 