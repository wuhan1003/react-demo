import React, { Component } from 'react';
class Mixins extends Component {
    componentWillMount(){
        console.log('this is mixin');
    }
    render(){
        return <section>mixins</section>
    }
}
export default Mixins;