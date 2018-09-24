import React from 'react';
import Card from './restaurant';

const Cards = (props) => {

    return (
        <div className="container-fluid">
            <div className="flex">

                {
                    props.results.map(function (element,index) {

                        return <Card key={index} card={element} />
                    })
                }
            </div>
        </div>
    );
}

export default Cards; 