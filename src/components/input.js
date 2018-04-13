import React, { Component } from 'react';
import Tips from '@/tips';
class Input extends Component {
    constructor(props){
        super( props );
        this.state = {
            show:false
        };
    }
    onBlur = e =>{
        const { pattern } = this.props;
        this.props.onBlur && this.props.onBlur(e);
        if(pattern){
            !pattern.test( e.target.value ) &&  this.setState({show:true}) 
        }
    }
    onFocus = e =>{
        this.setState({show:false});
        this.props.onFocus && this.props.onFocus(e);
    }
    componentDidMount(){
        
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
                    onBlur = { this.onBlur }
                    onFocus = { this.onFocus }
                    ref = { input => this.input = input }
                />
                <Tips tips = { this.props.tips } show = { this.state.show } className = "left" />  
            </p>
        )
    }
}
export default Input;