import React from 'react';
import styled from 'styled-components';
import Types from './Types/Types';

const PokedexInfo = React.memo(({selectedPokemon, pokedexInfo}) => {
    const { flavor_text_entries } = pokedexInfo;
    const description = flavor_text_entries ? flavor_text_entries.filter(cur => cur.language.name === "en" ? true : false) : null;
   
    const StyledInfo = styled.div`
        min-height: 100%;
        width: 100%;
        color: white;
        text-transform: capitalize;
    `
    const Image = styled.div`
    height: 100px;
    background-image: ${`url(http://felixsundqvist.org/pokemon/${selectedPokemon.name}.gif)`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    `
    const DexEntry = styled.div`
        padding: 16px;
        background-color: white;
        color: black;
        text-align: left;
        margin: 16px;
        font-family: sans-serif;
`
    const types = selectedPokemon.types 
        ? selectedPokemon.types.map(cur => <Types key={cur.type.name} type={cur.type.name} />) 
        : null;

    const abilities =  selectedPokemon.abilities ? 
        <>
            <h5>Abilities</h5>
            <DexEntry>
                {selectedPokemon.abilities.map(cur => <span key={cur.ability.name}>{cur.ability.name} <br /></span>)} 
            </DexEntry>
        </> 
        : null;
    

    const dexEntryText = description 
        ?   <>
                <h5>Dex Entry</h5>
                <DexEntry>
                    <p>{description[0].flavor_text}</p>
                </DexEntry>
            </>    
        :   <div>LOADING</div>;
 
    return(
        <StyledInfo>
            <Image />
            <h2>{selectedPokemon.name}</h2>
            <div>{ types }</div>
            <br />
            {abilities}
            {dexEntryText}
        </StyledInfo>
    )
})

export default PokedexInfo;