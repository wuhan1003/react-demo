import  PropTyeps  from 'prop-types';
function Avatar( props ){
    return(
        <section className = "components-avatar">
            <img 
                src = { props.url } 
                width = { props.width }
                height = { props.height }
                srcset = { props.srcset } 
                sizes = { props.sizes } />
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

export default Avatar;