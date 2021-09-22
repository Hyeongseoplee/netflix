import Loader from '../../Components/Loader';
import Poster from '../../Components/Poster';
import styled from 'styled-components';
import Section from '../../Components/Section';

const Container = styled.div`padding:20px;`;

export default function HomePresenter({nowPlaying, upComing, popular, error, loading}) {
    return (
        <>
        { loading ? <Loader/> : 
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title = "Now Playing">
                        {nowPlaying.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                title = {movie.original_title}
                                year = {movie.release_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                            />
                            )}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title = "Upcoming">
                        {upComing.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                title = {movie.original_title}
                                year = {movie.release_date.substring(0,4)}
                                rating = {movie.vote_average}
                                imgURL = {movie.poster_path}
                            />
                            )}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title = "Popular">
                        {popular.map((movie, key) => 
                            <Poster
                                key = {movie.id}
                                title = {movie.original_title}
                                year = {movie.release_date.substring(0,4)}
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