import Loader from '../../Components/Loader';
import Poster from '../../Components/Poster';
import styled from 'styled-components';
import Section from '../../Components/Section';
import PropTypes from 'prop-types';

const Container = styled.div`
    padding:15px;
`;

export default function HomePresenter({nowPlaying, upComing, popular, error, loading, isMovie}) {
    return (
        <>
        { loading ? <Loader/> : 
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title = "Now Playing">
                        {nowPlaying.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                id = {movie.id}
                                title = {movie.original_title}
                                year = {movie.release_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                                isMovie = {true}
                            />
                            )}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title = "Upcoming">
                        {upComing.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                id = {movie.id}
                                title = {movie.original_title}
                                year = {movie.release_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                                isMovie = {true}
                            />
                            )}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title = "Popular">
                        {popular.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                id = {movie.id}
                                title = {movie.original_title}
                                year = {movie.release_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                                isMovie = {true}
                            />
                            )}
                    </Section>
                )}
            </Container>
        }
        </>
    )
}

HomePresenter.prototype = {
    nowPlaying : PropTypes.array.isRequired,
    upComing : PropTypes.array.isRequired, 
    popular: PropTypes.array.isRequired, 
    error : PropTypes.string.isRequired, 
    loading : PropTypes.bool.isRequired,
}