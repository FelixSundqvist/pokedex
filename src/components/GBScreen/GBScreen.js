import React from 'react'
import styled, { withTheme } from 'styled-components';
import GenButtons from '../GenButtons/GenButtons';

const GBScreen = props => {
    const { theme } = props;

    const ScreenFrame = styled.div`
        height: 100%;
        width: 100%;
        overflow: scroll;
        margin: 0 auto;
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
    return ( 
        <ScreenFrame >
            <ScreenInner>
                    {props.children}
            </ScreenInner>
        </ScreenFrame>
    )
}

export default withTheme(GBScreen);