import PropTypes from 'prop-types';

function DetailPresenter({result, loading, error}) {
    return (
        <h4>"Look at this Detail!"</h4>
    )
}

DetailPresenter.prototype = {
    result : PropTypes.array.isRequired, 
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string.isRequired,
}

export default DetailPresenter;