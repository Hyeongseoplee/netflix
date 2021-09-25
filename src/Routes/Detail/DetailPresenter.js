import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width:100vw;
    height:calc(100vh - 52px);
    border-radius: 4px;
    position:relative;
`;

const Background = styled.img`
    background: url(${props => props.src});
    background-size:cover;
    background-position:center;
    width:100%;
    height:100%;
    filter: blur(5px) brightness(0.2);
`;

const Detail = styled.div`
    display:flex;
    position:absolute;
    left:50%;
    top:50%;
    transform: translateX(-50%) translateY(-50%);
    bottom:10px;
    width:90%;
    height:90%;
`;

const SmallPoster = styled.img`
    background-image: url(${props => props.src});
    border-radius: 2px;
    box-shadow:2px 2px 10px black;
`;

const Information= styled.div`
    width:70%;
    background-color:rgba(210, 218, 226,0.1);
    margin-left:10px;
    border-radius: 2px;
    padding:15px;
    position:relative;
`;

const MetaInfo = styled.div`
    display:flex;
    flex-direction: column;
`;

const InfoColumn = styled.div`
    display:flex;
    &:first-child{
        margin-bottom:20px;
    }
    
`;

const Title = styled.div`
    font-size:24px;
`;

const Year = styled.div`
    font-size:14px;
    display:flex;
    align-items: flex-end;
    margin-left:10px;
`;

const Genres = styled.div``;

const Rating = styled.div``;

const Overview = styled.div`
    margin-top:50px;
`;

const Text = styled.div`
    line-height: 20px;
`;

const Divider = styled.div``;

const GobackBtn = styled.button`
    all : unset;
    margin-top:30px;
    padding:5px 12px;
    cursor: pointer;
    border-radius: 10px;
    color:white;
    position:absolute;
    bottom:15px;
    right:25px;
    transition:all .2s ease-in-out;
    border:1px solid white;
    &:hover{
        background-color: white;
        border:1px solid black;
        color:black;
    }
`;

const Runtime = styled.div``;

export default function DetailPresenter({result, loading, error, props}) {

    const goback = () => {
        props.history.goBack();
    }

    console.log(result);
    return (
        <>
        {loading ? <Loader/> :         
        <Container>
            <Background src={`https://image.tmdb.org/t/p/original${result.data.backdrop_path}`} alt="poster image">
            </Background>
            <Detail>
                <SmallPoster src={`https://image.tmdb.org/t/p/original${result.data.poster_path}`}/>
                <Information>
                    <MetaInfo>
                        <InfoColumn>
                            <Title>{result.data.original_name ? result.data.original_name : result.data.original_title}</Title>
                            <Year>({result.data.first_air_date ? result.data.first_air_date.substring(0,4) : result.data.release_date.substring(0,4)})</Year>
                        </InfoColumn>
                        <InfoColumn>
                            <Rating>⭐️ {result.data.vote_average}/10</Rating>
                            <Divider/>
                            <Runtime></Runtime>
                            <Divider/>
                            <Genres>{result.data.genres.map((genre, key) => genre.name)}</Genres>
                        </InfoColumn>
                    </MetaInfo>
                    <Overview>
                        <Text>{result.data.overview}</Text>
                    </Overview>
                        <GobackBtn onClick={goback}>Go back</GobackBtn>
                </Information>
            </Detail>
        </Container>}
        </>
    )
}

DetailPresenter.prototype = {
    result : PropTypes.array.isRequired, 
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string.isRequired,
}
