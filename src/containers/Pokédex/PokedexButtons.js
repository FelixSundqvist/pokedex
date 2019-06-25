import React from 'react'
import styled from 'styled-components';
import generations from '../../PokemonGeneration';

const PokedexButtons = React.memo(props => {
    const BtnWrapper = styled.div`
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `
    const GenerationButton = styled.div`
        margin: 8px;
        padding: 8px;
        flex: 0 0 80px;
        border-radius: 1vh;
        background-color: ${props.theme.palette.secondary};
        border: 2px solid blue;
        cursor: pointer;  
    `
    const genButtons = generations.map((cur, index) => 
    <GenerationButton key={"Gen"+index} onClick={() => props.genClick(index)}>
        Gen {index + 1}
    </GenerationButton>)

    return <BtnWrapper>{ genButtons }</BtnWrapper>
})
export default PokedexButtons;