import React from 'react'
import styled, { withTheme } from 'styled-components';

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
    
    const ScreenFrame = styled.div`
        outline: 2vw solid ${theme.palette.white};
        height: 90%;
        width: 90%;
        overflow: scroll;
        margin: 2vh auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px){
            margin: 0;
        }
    `    
    const ScreenInner = styled.div`
        min-height: 100%;
        min-width: 100%;
        padding: 16px;
        background-color: ${theme.palette.black};
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    `
    
    return( 
    <StyledWrapper>
        <ScreenFrame>

            <ScreenInner>
                {children}
            </ScreenInner>

        </ScreenFrame>

        {genButtons ? <GenButtons /> : null}
        {scanner ? <PokedexScanner />: null}

    </StyledWrapper>)
}

export default withTheme(Wrapper)