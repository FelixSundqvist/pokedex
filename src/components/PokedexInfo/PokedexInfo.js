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
import Moves from './Moves/Moves';

const DexEntry = React.lazy(() => import('./DexEntry/DexEntry'));

const PokedexInfo = React.memo(props => {
    
    const {selectedPokemon, pokedexInfo, evoChain, evolutionClick} = props;
    const [imageLink] = useState(`http://felixsundqvist.org/pokemon/${selectedPokemon.name}.gif`)
    const [showMoves, setShowMoves] = useState(false);
    const [showEvolution, setShowEvolution] = useState(false);
    const [showStats, setShowStats] = useState(false);

    const { flavor_text_entries, varieties, habitat } = pokedexInfo;
    const { moves, height, weight, abilities, stats } = selectedPokemon;

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
        stats: null,
        evolutionChain: null,
        moves: null
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
                    onClick={evolutionClick}
                    name={form.pokemon.name}
                    >
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
    ? <EvolutionChain 
        onClick={() => setShowEvolution(!showEvolution)} 
        show = { showEvolution } 
        key="evo chain" 
        evoChain={evoChain}/> 
    : null;
                
    //stats, habitat, moves
    pokemonProperties.habitat = habitat ? <p key="habitat"> Habitat: { habitat.name }</p> : null;

    pokemonProperties.stats = stats 
    ? <Stats 
        key="stats" 
        stats={stats} 
        show={showStats}
        onClick={() => setShowStats(!showStats)} />
    : null;

    pokemonProperties.moves = moves ? 
        <Moves 
            moves={moves} 
            onClick={() => setShowMoves(!showMoves)} 
            show={showMoves} 
            key="moves" /> : null;

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
            
           {/*  <Button>Add To Team</Button> */}
        </StyledInfo>
    )
})

export default withTheme(PokedexInfo);