import Loader from '../../Components/Loader';
import Poster from '../../Components/Poster';
import styled from 'styled-components';
import Section from '../../Components/Section';
import PropTypes from 'prop-types';

const Container = styled.div``;

const Form = styled.form`
    width:100%;
`;

const Input = styled.input`
    all : unset;
    width:100%;
    padding:10px;
    font-size:24px;
`;

function SearchPresenter({movieResult, tvResult, searchTerm, loading, error, handleSubmit, updateTerm}) {
    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        onChange={updateTerm} 
                        type ="text" 
                        defaultValue = {searchTerm}
                        placeholder="Seach the movie and TV show .. ">
                    </Input>
                </Form>
                {loading ? <Loader/> : (
                    <>
                        {movieResult && movieResult.length > 0 && 
                            <Section title = "Movies">
                            {movieResult.map((movie, key) => 
                                <Poster 
                                    key = {movie.id}
                                    id = {movie.id}
                                    title = {movie.original_title}
                                    year = {movie.release_date.substring(0,4)}
                                    rating = {movie.vote_average}
                                    imgURL = {movie.poster_path}
                                    isMovie = {true}
                                    />)}
                            </Section>}
                        {tvResult && tvResult.length > 0 && 
                            <Section title = "TV shows">
                            {tvResult.map((tv, key) => 
                                <Poster 
                                    key = {tv.id}
                                    id = {tv.id}
                                    title = {tv.original_name}
                                    year = {tv.first_air_date && tv.first_air_date.substring(0,4)}
                                    rating = {tv.vote_average}
                                    imgURL = {tv.poster_path}
                                    />)}
                            </Section>}
                        </>
                    )
                }
            
            </Container>
        </>
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