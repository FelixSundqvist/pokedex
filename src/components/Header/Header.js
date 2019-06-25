import React from 'react';
import styled, { withTheme } from 'styled-components';
import PokedexScanner from '../PokedexScanner/PokedexScanner';


const Header = ({ theme }) => {

    const StyledHeader = styled.header`
    margin: 0;
    height: 20vh;
    width: 100%;
    background-color: ${theme.palette.black};
    color: white;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
    position: relative;
    h1{
        line-height: 20vh;
        margin: 0;
        font-size: 10vh;
        vertical-align: middle;
    }`


    return (
        <StyledHeader>
            <h1>Pokedex</h1>
            <PokedexScanner />
        </StyledHeader>)
}

export default withTheme(Header);