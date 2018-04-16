import React, { Component } from 'react';




class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBack : false,
        }
    }
    componentWillMount(){

        const { history } = this.props;
        if(history.length > 1){
            this.setState({isBack:true})
        }
    }
    back = () => {
        const { goBack } = this.props.history;
        goBack();

    }
    render(){
        return(
            <header className = "header">
                {
                    this.state.isBack && <span 
                        onClick = { this.back } 
                        className = "iconfont icon-back"></span>
                }
                <h2>{this.props.title}</h2>
            </header>
        )
    }
}
Header.defaultProps = {
    title:'首页'
}
export default Header;