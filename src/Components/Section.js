import styled from 'styled-components';

const Container = styled.div`
:not(:first-child){
    margin-top:40px;
}
`;

const Title = styled.div`
    font-size:24px;
    color:white;
`;

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, 100px);
    gap:14px;
`;

export default function Section({title, children}) {
    return (
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    )
}