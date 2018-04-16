import  PropTyeps  from 'prop-types';
function Avatar( props ){
    return(
        <section className = "components-avatar">
            <img 
                src = { props.url } 
                width = { this.props.width }
                height = { this.props.height }
                srcset = { this.props.srcset } 
                sizes = {this.props.sizes } />
        </section>
    )
}
Avatar.propTyeps = {
    // url:PropTypes.string.isRequired,
    url:PropTypes.oneOftype([
        PropTypes.isRequired,
        PropTypes.string
    ])
}