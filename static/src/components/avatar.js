import React, { Component } from 'react';
import  PropTypes  from 'prop-types';
class Avatar extends Component {
    constructor( props ){
        super(props);
        // this.state = {
        //     imgSrc : require(this.props.src)
        // }
    }
    componentWillMount(){
        console.log( this.props.src )
    }
    render(){
        return(
            <section className = {`components-avatar ${this.props.className }`  }>
                <img 
                    src = { require('../' + this.props.src ) }
                    width = { this.props.width }
                    height = { this.props.height }
                    srcSet = { this.props.srcset } 
                    sizes = { this.props.sizes } />
            </section>
        )
    }
}
Avatar.propTypes = {
    src:PropTypes.string.isRequired,
    // url:PropTypes.oneOftype([
    //     PropTypes.isRequired,
    //     PropTypes.string
    // ])
}

export default Avatar;