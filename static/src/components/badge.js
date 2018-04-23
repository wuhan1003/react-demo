import React from 'react';
import  PropTypes  from 'prop-types';
function Badge( props ){
    return(
        <span className ="components-badge">{ props.number }</span>
    )
}
Badge.propTypes = {
    number:PropTypes.number,
}
export default Badge;