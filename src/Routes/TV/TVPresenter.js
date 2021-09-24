import Loader from '../../Components/Loader';
import Poster from '../../Components/Poster';
import styled from 'styled-components';
import Section from '../../Components/Section';
import PropTypes from 'prop-types';


const Container = styled.div``;

function TVPresenter({popular, topRated, airingToday, loading, error}) {
    return (
        <>
        { loading ? <Loader/> : 
            <Container>
                {popular && popular.length > 0 && (
                    <Section title = "Popular">
                        {popular.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                title = {movie.original_name}
                                year = {movie.first_air_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                            />
                            )}
                    </Section>
                )}
                {topRated && topRated.length > 0 && (
                    <Section title = "Top rated">
                        {topRated.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                title = {movie.original_name}
                                year = {movie.first_air_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                            />
                            )}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title = "Airing Today">
                        {airingToday.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                title = {movie.original_name}
                                year = {movie.first_air_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                            />
                            )}
                    </Section>
                )}
            </Container>
        }
        </>
    )
}

TVPresenter.prototype = {
    popular : PropTypes.array.isRequired,
    topRated : PropTypes.array.isRequired, 
    airingToday: PropTypes.array.isRequired, 
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string.isRequired, 
}

export default TVPresenter;