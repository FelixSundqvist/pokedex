import React from 'react'
import styled from 'styled-components';

const GBScreen = props => {
    const { theme } = props;

    const ScreenFrame = styled.div`
        background-color: ${theme.palette.white};
        height: 100%;
        width: 100%;
        border: .4vw solid black;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    `    
    const ScreenInner = styled.div`
        height: 80%;
        width: 80%;
        background-color: ${theme.palette.black};
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        overflow: ${props.scroll ? "scroll" : null};
    `
    return ( 
        <ScreenFrame>
            <ScreenInner>
                    {props.children}
            </ScreenInner>
        </ScreenFrame>
    )
}

export default GBScreen;