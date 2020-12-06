import React from 'react';

const Display = props => {
    return(
        <div className="d-flex justify-content-center">
            {isNaN(props.id) ?
            <h2>The Word is: {props.id}</h2> :
            <h2>The Number is: {props.id}</h2>
            }
        </div>
    )
}
export default Display;