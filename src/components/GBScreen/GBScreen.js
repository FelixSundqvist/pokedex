import React from 'react'
import styled, { withTheme } from 'styled-components';

const GBScreen = props => {
    const { theme } = props;

    const ScreenFrame = styled.div`
        max-height: 800px;
        max-width: 800px;
        min-height: 300px;
        min-width: 300px;
        overflow: scroll;
        margin: 16px auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 16px;
        @media (max-width: 768px){
            margin: 0;
        }
    `    
    const ScreenInner = styled.div`
        min-height: 100%;
        min-width: 100%;
        background-color: ${theme.palette.black};
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    
    `
    return ( 
        <ScreenFrame>
            <ScreenInner>
                    {props.children}
            </ScreenInner>
        </ScreenFrame>
    )
}

export default withTheme(GBScreen);