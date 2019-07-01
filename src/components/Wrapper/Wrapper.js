import React from 'react'
import styled, { withTheme } from 'styled-components';
import GBScreen from '../GBScreen/GBScreen';
import GenButtons from '../GenButtons/GenButtons';
import PokedexScanner from '../UI/PokedexScanner/PokedexScanner';

const Wrapper = ({ theme, children, genButtons, scanner }) => {
    const StyledWrapper = styled.div`
    position: relative;
    width: 50vw;
    height: 40vw;
    margin: 0 auto;
    padding: 16px;
    background-color: ${theme.palette.primaryDark};
    border: .3vw solid ${theme.palette.black};
    box-shadow: 5px 10px 10px ${theme.palette.black};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px){
        width: 95vw;
        height: 100vh;
    }
    `
    
    return( 
    <StyledWrapper>
        {genButtons ? <GenButtons /> : null}
        {scanner ? <PokedexScanner />: null}
        <GBScreen>
            {children}
        </GBScreen> 
    </StyledWrapper>)
}

export default withTheme(Wrapper)