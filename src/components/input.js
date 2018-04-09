import React, { Component } from 'react';
class Input extends Component {
    constructor(props){
        super( props );
        this.state = {};
    }
    
    render(){
        return(
            <p className = "components-input">
                <i className = {['iconfont',this.props.icon && this.props.icon].join(' ')} />
                <input 
                    type = { this.props.type } 
                    value = { this.props.vulue }
                    placeholder = { this.props.placeholder }
                    disabled = { this.props.disabled }
                    onChange = { this.props.onChange }
                />
                {
                    this.props.tips && <span>{ this.props.tips }</span>
                }     
            </p>
        )
    }
}
export default Input;