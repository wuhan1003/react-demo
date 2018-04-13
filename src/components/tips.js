import React, { Component } from 'react';




class Tips extends Component {
    
    render(){
        return (
            this.props.show && <span className = {['components-tips', this.props.className ? this.props.className: null].join(' ')}> { this.props.tips } </span>
        )
    }
}
Tips.defaultProps = {
    className : 'left',
}
export default Tips;