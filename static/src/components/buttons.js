import React, { Component } from 'react';
// import { defaultProps } from 'prop-types';
class Button extends Component {
    constructor(props){
        super( props ); 
        this.state = {}
    }
    onClick = e => { 
        if( this.props.onClick ){
            this.props.onClick( e );
        }
    }
    render(){
        return(
            <button 
                disabled = { this.props.disabled }
                className = {['components-button', this.props.size ? this.props.size : null].join(' ')}
                onClick = { this.onClick }
            >
                { this.props.value }
            </button>
        )
    }
}
Button.defaultProps = {
    
}


export default Button;