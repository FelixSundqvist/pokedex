import React from 'react'
import styled from 'styled-components';
import GBScreen from './GBScreen/GBScreen';
import BodyFold from './BodyFold/BodyFold';

const Body = props => {

    const { theme } = props;
    
    const Body = styled.div`
        height: 100%;
        width: 100%;
        padding: 5vh;
        background-color: ${ theme.palette.primaryDark };
        border: .5vw solid black;
    `
    const BodyContainer = styled.div`
        position: relative;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 500px){
            height: 300px;
            width: 300px;
        }
    `
    const GB = styled.div`
        height: 700px;
        width: 700px; 
    `

    return (
        <Body>
            <BodyContainer>
            <GB>
                <GBScreen scroll theme={theme}>
                    {props.children}
                </GBScreen>
            </GB>


            <BodyFold 
                selectedPokemon = {props.selectedPokemon}
                generations={props.generations} 
                theme={theme}
                genClick={props.genClick}
                />

            </BodyContainer>
            
        </Body>

    )
}

export default Body;