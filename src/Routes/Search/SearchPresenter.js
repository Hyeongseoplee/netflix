import Loader from '../../Components/Loader';
import Poster from '../../Components/Poster';
import styled from 'styled-components';
import Section from '../../Components/Section';
import PropTypes from 'prop-types';


function SearchPresenter({tvResult, movieResult, searchTerm, loading, error}) {
    
    return (
        <h4>This is Search page.</h4>
    )
}

SearchPresenter.prototype = {
    tvResult : PropTypes.array.isRequired,
    movieResult : PropTypes.array.isRequired, 
    searchTerm: PropTypes.string.isRequired, 
    error : PropTypes.string.isRequired, 
    loading : PropTypes.bool.isRequired,
}

export default SearchPresenter;