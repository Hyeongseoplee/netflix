import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styled from 'styled-components';
import Loader from '../../Components/Loader';

const Container = styled.div`
    width:100vw;
    height:calc(100vh - 52px);
`;

const Background = styled.img`
    background: url(${props => props.src});
    background-size:cover;
    background-position:center;
    width:100%;
    height:100%;
    filter: blur(5px) brightness(0.2);
    
`;

function DetailPresenter({result, loading, error}) { 
    return (
        <>
        {loading ? <Loader/> :         
        <Container>
            <Background src={`https://image.tmdb.org/t/p/original${result.data.backdrop_path}`} alt="poster image">
            </Background>
        </Container>}
        </>
    )
}

DetailPresenter.prototype = {
    result : PropTypes.array.isRequired, 
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string.isRequired,
}

export default DetailPresenter;