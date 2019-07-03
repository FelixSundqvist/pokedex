import React, { Suspense } from 'react';
import styled, { withTheme } from 'styled-components';
import Types from './Types/Types';
import InfoImage from './InfoImage/InfoImage';
import Button from '../UI/Button/Button';
import { roundNum, checkLetter } from '../../utility';
import Abilities from './Abilities/Abilities';
import showOnClick from '../../hoc/showOnClick';

const Stats = React.lazy(() => import('./Stats/Stats')) 
const EvolutionChain = React.lazy(() =>  import('./EvolutionChain/EvolutionChain'));
const DexEntry = React.lazy(() => import('./DexEntry/DexEntry'));
const MoveList = React.lazy(() => import('./Moves/MoveList'));
const EggGroup = React.lazy(() => import('./EggGroup/EggGroup'));

const PokedexInfo = React.memo(props => {
    
    const {selectedPokemon, pokedexInfo, evoChain, evolutionClick, addToTeam } = props;
    
    if(selectedPokemon && pokedexInfo && evoChain){
        const { flavor_text_entries, varieties, habitat, base_happiness, capture_rate, egg_groups } = pokedexInfo;
        const { moves, height, weight, abilities, stats } = selectedPokemon;
    
        
        const imageLink = `http://felixsundqvist.org/pokemon/${selectedPokemon.name}.gif`

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
            captureRate: null,
            baseHappiness: null,
            habitat: null,
            abilities: null,
            description: null,
            stats: null,
            evolutionChain: null,
            eggGroups: null,
            moves: null,
        }
        
        //DESCRIPTION
        const description = flavor_text_entries 
        ? flavor_text_entries.filter(cur => cur.language.name === "en")[0] 
        : null;
    
        //TYPES
        pokemonProperties.types = selectedPokemon.types 
        ? <div key="types">{selectedPokemon.types.map(cur => <Types key={cur.type.name} type={cur.type.name} />).reverse()}</div> 
        : null;
    
        //GENERA
        const pokemonGenera = pokedexInfo.genera 
        ? pokedexInfo.genera.filter(cur => cur.language.name === "en")[0] : null;
        pokemonProperties.pokemonGenus = pokemonGenera 
        ? <h3 key="genus">{checkLetter(pokemonGenera.genus)}</h3> 
        : null;

        //ABILITIES
        pokemonProperties.abilities = abilities 
        ? <Abilities key="abilities" abilities={abilities}/>
        : null;
        
        //pokemon dex entry
        pokemonProperties.description = description 
        ?   
            <React.Fragment key="description">
                <h3>Dex Entry</h3>
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

        //evolution chain, stats, moves
        pokemonProperties.evolutionChain = evoChain 
            ? showOnClick(EvolutionChain)({evoChain: evoChain, title: "Evolution Chain"}) 
            : null;
        pokemonProperties.stats = stats 
            ? showOnClick(Stats)({stats:stats, title: "Stats"}) 
            : null;
        pokemonProperties.moves = moves 
            ? showOnClick(MoveList)({moves: moves, title: "Move List"})
            :null;
        pokemonProperties.eggGroups = egg_groups ? showOnClick(EggGroup)({title:"Egg Group", eggGroups:egg_groups}) : null;    
        
        // habitat, capture rate, happiness
        pokemonProperties.habitat = habitat ? <p key="habitat"> Habitat: { habitat.name }</p> : null;
        pokemonProperties.baseHappiness = base_happiness ? <p key="happiness" >Base Happiness : {base_happiness}</p> : null;
        pokemonProperties.captureRate = capture_rate ? <p key="capture">Capture Rate: {capture_rate} </p> : null;

        //Map through all pkmnProperties and render
        const allPkmnProperties = Object.keys(pokemonProperties).map(cur => pokemonProperties[cur]);
    
        //image gif
        const infoImage =  imageLink !== "http://felixsundqvist.org/pokemon/undefined.gif" 
            ? <InfoImage imageLink={imageLink} varieties={varieties} evolutionClick={evolutionClick} /> 
            : null;
        return(
            <StyledInfo>
                <Suspense fallback={<p>LOADING</p>}>
                    {infoImage}
                </Suspense>
               
                <h2>{selectedPokemon.name}</h2>
                {allPkmnProperties}
                
                <Button onClick={() => addToTeam({...selectedPokemon,...pokedexInfo, name: selectedPokemon.name})}>Add To Team</Button>
            </StyledInfo>
        )
    }

})

export default withTheme(PokedexInfo);