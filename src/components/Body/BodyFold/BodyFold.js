import React from 'react';
import styled from 'styled-components';
import GBController from '../GBController/GBController';
import GBScreen from '../GBScreen/GBScreen';
import PokedexInfo from '../../PokedexInfo/PokedexInfo';

const BodyFold = React.memo((
    {
        theme, 
        generations, 
        genClick, 
        selectedPokemon, 
        pokedexInfo
    }) => {

    const StyledFold = styled.div`
        position: relative;
        height: 700px;
        width: 700px;
        border: .4vw solid black;
        background-color: ${theme.palette.primary}
    `
    const GenerationButton = styled.div`
        margin: 8px;
        border-radius: 1vh;
        background-color: ${theme.palette.secondary};
        border: 2px solid blue;
        cursor: pointer;
    `
    const BtnWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    const ScreenWrapper = styled.div`
        height: 400px;
        width: 400px;
        margin: 16px auto;
    `

    const genButtons = generations.map((cur, index) => 
        <GenerationButton key={"Gen"+index} onClick={() => genClick(index)}>
            Gen {index + 1}
        </GenerationButton>)

    return (
    <StyledFold>
        
        <BtnWrapper>
            {genButtons} 
        </BtnWrapper>


        <ScreenWrapper>
            <GBScreen scroll theme={theme}>
                <PokedexInfo
                    pokedexInfo={pokedexInfo} 
                    selectedPokemon={selectedPokemon} />
            </GBScreen>
        </ScreenWrapper>

        <GBController theme={theme}/>
    
    </StyledFold>)
});

export default BodyFold;