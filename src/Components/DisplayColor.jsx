import React from 'react';

const DisplayColor = props => {
    return(
        <div className="d-flex justify-content-center" style={{color: props.color, backgroundColor: props.background}}>
            {isNaN(props.id) ?
            <h2>The Word is: {props.id}</h2> :
            <h2>The Number is: {props.id}</h2>
            }
        </div>
    )
}
export default DisplayColor;