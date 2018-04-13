import React, { Component } from 'react';
// import { defaultProps } from 'prop-types';
class Button extends Component {
    constructor(props){
        super( props ); 
        this.state = {}
    }
    render(){
        return(
            <button 
                disabled = { this.props.disabled }
                className = {['components-button', this.props.size ? this.props.size : null].join(' ')}
            >
                { this.props.value }
            </button>
        )
    }
}
Button.defaultProps = {
    
}


export default Button;