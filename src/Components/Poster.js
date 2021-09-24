import styled from 'styled-components';

const Container = styled.div`
    margin-top: 30px;
    height:200px;
`;

const PosterImg = styled.img`
    background-image : url(${props => props.src});
    height:100%;
    width:100%;
    background-size:cover;
    background-position : center center;
    border-radius: 2px;
    z-index:100;
    transition: all .2s ease-in-out;
    cursor:pointer;
`;

const Rating = styled.div`
    position:absolute;
    bottom:50%;
    right:50%;
    transform: translateY(50%) translateX(50%);
    opacity: 0;
    display:flex;
`;

const ImgContainer = styled.div`
    height:140px;
    position:relative;
    &:hover {
        ${PosterImg}{
            opacity:0.3;
        }
        ${Rating}{
            opacity: 1;
        }
    }
`;

const Title = styled.div`
    font-size:12px;
    margin-top:5px;
    margin-bottom:7px;
    line-height: 1rem;
`;

const Year = styled.div`
    font-size: 10px;
`;

const StarIcon = styled.div`
    margin-right:5px;
`;

export default function Poster({title, year, rating, imgURL}) {
    return (
        <Container>
            <ImgContainer>
                <PosterImg src={`https://image.tmdb.org/t/p/w300/${imgURL}`}/>
                <Rating>
                    <StarIcon role="img" aria-label="rating">🌟</StarIcon>  
                    {rating}/10</Rating>
            </ImgContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    )
}