import React from 'react';
import styled from 'styled-components';
import HeaderCircle from './HeaderCircle';

const Header = ({ theme }) => {

    const StyledHeader = styled.header`
    margin: 0;
    height: 20vh;
    width: 100%;
    background-color: ${theme.palette.primary};
    color: white;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
    position: relative;
    h1{
        line-height: 20vh;
        margin: 0;
        vertical-align: middle;
    }`


    return (
        <StyledHeader>
            <h1>Pokédex</h1>
            <HeaderCircle theme={theme} />
        </StyledHeader>)
}

export default Header;