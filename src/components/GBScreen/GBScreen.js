import React from 'react'
import styled, { withTheme } from 'styled-components';

const GBScreen = props => {
    const { theme } = props;

    const ScreenFrame = styled.div`
        max-height: 700px;
        max-width: 700px;
        overflow: scroll;
        margin: 16px auto;
    `    
    const ScreenInner = styled.div`

        background-color: ${theme.palette.black};
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 4vw;
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