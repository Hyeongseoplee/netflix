import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const NavBarHeader = styled.div`
    display:flex;
    align-items:center;
    padding : 10px 15px;
    height:50px;
    border-bottom:2px solid black;
    box-shadow: 0px 3px 10px black;
`;

const NavBarLogo = styled.h1`

`;

const List = styled.ul`
    display:flex;
    margin-left:10px;
    height:30px;
    display:flex;
    align-items: center;
`;

const Item = styled.li`
    margin : 0 10px;
    &:not(:last-child) {
        margin-right:10px;
    }
    transition :border-bottom .2s ease-in-out;
    border-bottom: 5px solid ${props => props.current === false ? "transparent" : "blue"};
`;

const SLink = styled(Link)`
display:inline-block;
padding : 4px 10px;
list-style: none;
text-decoration : none;
width:70px;
text-align:center;
color: whitesmoke;
`;

export default withRouter(({location : { pathname }}) => (
    <NavBarHeader>
    <NavBarLogo>SupFlix</NavBarLogo>
    <List>
        <Item current={pathname === "/"}>
            <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
            <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
            <SLink to="/search">Search</SLink>
        </Item>
    </List>
</NavBarHeader>
))