import React from 'react'
import styled, { withTheme } from 'styled-components';
import generations from '../../../PokemonGeneration';
import Button from '../Button/Button';

const ChangeGenButtons = React.memo(props => {
    const BtnWrapper = styled.div`
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        @media screen and (max-width: 768px){
            font-size: 2vw;
        }
    `
    const genButtons = generations.map((cur, index) => 
    <Button 
        key={"Gen"+index} 
        onClick={() => props.genClick(index)}
        selected={props.currentGen + 1 === index + 1}
        >{index + 1} </Button>)

    return <BtnWrapper>{ genButtons }</BtnWrapper>
})
export default withTheme(ChangeGenButtons);