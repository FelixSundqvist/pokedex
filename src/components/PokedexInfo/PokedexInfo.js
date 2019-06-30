import React, { useState, Suspense } from 'react';
import styled, { withTheme } from 'styled-components';

import Types from './Types/Types';
import Button from '../UI/Button/Button';
import InfoImage from './InfoImage/InfoImage';
import FormButton from './FormButton/FormButton';
import Stats from './Stats/Stats';
import EvolutionChain from './EvolutionChain/EvolutionChain';
import { roundNum, checkLetter } from '../../utility';
import Abilities from './Abilities/Abilities';

const DexEntry = React.lazy(() => import('./DexEntry/DexEntry'));

const PokedexInfo = React.memo(({selectedPokemon, pokedexInfo, evoChain, evolutionClick}) => {

    const [imageLink, changeImageLink] 
        = useState(`http://felixsundqvist.org/pokemon/${selectedPokemon.name}.gif`)
    
    const { flavor_text_entries, varieties, habitat } = pokedexInfo;
    const { moves, height, weight, abilities, stats } = selectedPokemon;
    const linkURL = "http://felixsundqvist.org/pokemon/";

    const StyledInfo = styled.div`
        min-height: 100%;
        width: 100%;
        color: white;
        text-transform: capitalize;
    `

    const pokemonProperties = {
        pokemonGenus: null,
        types: null,
        size: null,
        habitat: null,
        formes: null,
        abilities: null,
        description: null,
        moves: null,
        stats: null,
        evolutionChain: null
    }
    //DESCRIPTION
    const description = flavor_text_entries 
    ? flavor_text_entries.filter(cur => cur.language.name === "en")[0] : null;

    //TYPES
    pokemonProperties.types = selectedPokemon.types 
    ? <div key="types">{selectedPokemon.types.map(cur => <Types key={cur.type.name} type={cur.type.name} />)}</div> 
    : null;

    //GENERA
    const pokemonGenera = pokedexInfo.genera 
    ? pokedexInfo.genera.filter(cur => cur.language.name === "en")[0] : null;
    pokemonProperties.pokemonGenus = pokemonGenera 
    ? <h3 key="genus">{checkLetter(pokemonGenera.genus)}</h3> 
    : null;
    // FORMES
    pokemonProperties.formes = varieties && varieties.length > 1 
    ? 
        <div key="forms"> 
            <h3>Formes</h3>
            { varieties.map(form => 
                <FormButton 
                    key={form.pokemon.name}
                    onClick={() => changeImageLink(linkURL+form.pokemon.name+".gif")}>
                        {form.pokemon.name}
                </FormButton>)}
        </div>
    :  null 
   
    //ABILITIES
    pokemonProperties.abilities = abilities 
    ? <Abilities key="abilities" abilities={abilities} />
    : null;
    
    //pokemon dex entry
    pokemonProperties.description = description 
    ?   
        <React.Fragment key="description">
            <h5>Dex Entry</h5>
            <DexEntry>
                <p>{description.flavor_text}</p>
            </DexEntry>
        </React.Fragment>    
    :   <div key="loading">LOADING</div>;

    //size
    pokemonProperties.size = height && weight
    ? 
        <p key="size">
            {`Height: ${roundNum(height, 0.1)} m`} 
            <br />
            {`Weight: ${roundNum(weight, 0.1)} kg`}
        </p>
    : null;
    
    //evolution chain
    pokemonProperties.evolutionChain = evoChain 
    ? <EvolutionChain onClick={evolutionClick} key="evo chain" evoChain={evoChain}/> 
    : null;
                
    //stats, habitat
    pokemonProperties.habitat = habitat ?<p key="habitat">{ habitat.name }</p> : null;
    pokemonProperties.stats = stats ? <Stats key="stats" stats={stats} /> : null;
    

    const allPkmnProperties = Object.keys(pokemonProperties).map(cur => pokemonProperties[cur]);

    //3d gif
    const infoImage =  imageLink !== "http://felixsundqvist.org/pokemon/undefined.gif" 
        ? <InfoImage imageLink={imageLink} /> 
        : null;

    return(
        <StyledInfo>
            <Suspense fallback={<p>LOADING</p>}>
                {infoImage}
            </Suspense>
           
            <h2>{selectedPokemon.name}</h2>
            {allPkmnProperties}
            
            <Button>Add To Team</Button>
        </StyledInfo>
    )
})

export default withTheme(PokedexInfo);