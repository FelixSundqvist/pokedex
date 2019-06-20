import React from 'react'
import styled from 'styled-components';
import GBController from '../GBController/GBController';

const Body = props => {

    const { theme } = props;
    const Body = styled.div`
        height: 100%;
        width: 100%;
        padding: 5vh;

        background-color: ${ theme.palette.primaryDark};
    `
    const BodyContainer = styled.div`
        height: 500px;
        width: 500px;
        
       
        @media screen and (max-width: 500px){
            height: 300px;
            width: 300px;
        }
    `
    const BodyFrame = styled.div`
        background-color: ${theme.palette.white};
        height: 100%;
        width: 100%;
        border: 5px solid black;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        
    `    
    const BodyInner = styled.div`
        height: 90%;
        width: 90%;
        background-color: ${theme.palette.black};
    `
    return (
        <Body>
            <BodyContainer>

            <BodyFrame>
                <BodyInner>
                    {props.children}
                </BodyInner>
            </BodyFrame>

            <GBController theme={theme} />

            </BodyContainer>
        </Body>

    )
}

export default Body;