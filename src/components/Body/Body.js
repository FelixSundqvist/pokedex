import React from 'react'
import styled from 'styled-components';
import GBController from '../GBController/GBController';
import GBScreen from './GBScreen/GBScreen';

const Body = props => {

    const { theme } = props;
    
    const Body = styled.div`
        height: 100%;
        width: 100%;
        padding: 5vh;
        background-color: ${ theme.palette.primaryDark};
        border: .5vw solid black;
    `
    const BodyContainer = styled.div`
        height: 500px;
        width: 500px;
        margin: 0 auto;
        
        @media screen and (max-width: 500px){
            height: 300px;
            width: 300px;
        }
    `

    return (
        <Body>
            <BodyContainer>
            
            <GBScreen theme={theme}>
                {props.children}
            </GBScreen>
            
            <GBController theme={theme} />
            
            </BodyContainer>
        </Body>

    )
}

export default Body;