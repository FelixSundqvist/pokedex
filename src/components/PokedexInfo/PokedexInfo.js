import React from 'react';
import styled from 'styled-components';
import Types from './Types/Types';

const PokedexInfo = React.memo(({selectedPokemon, pokedexInfo}) => {
    const StyledInfo = styled.div`
        min-height: 100%;
        width: 100%;
        color: white;
    `
    const types = selectedPokemon.types 
        ? selectedPokemon.types.map(cur => <Types key={cur.type.name} type={cur.type.name} />) 
        : null;

    const abilities = 
        selectedPokemon.abilities 
            ? selectedPokemon.abilities.map(
                cur => <span> {cur.ability.name} </span>) : null;
    
    const Image = styled.div`
        height: 100px;
        background-image: ${`url(http://felixsundqvist.org/pokemon/${selectedPokemon.name}.gif)`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    `
    console.log(pokedexInfo)
    //selectedPokemon, 
    return(
        <StyledInfo>
            <Image />
            <h2>{selectedPokemon.name}</h2>
            <div>{ types }</div>
            <br />
            <div>{ abilities }</div>
        </StyledInfo>
    )
})

export default PokedexInfo;