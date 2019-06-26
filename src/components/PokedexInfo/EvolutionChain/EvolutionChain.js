import React from 'react';
import styled from 'styled-components';
import Card from '../../CardList/Card/Card';
import { getIDFromURL, createArr } from '../../../utility';
const EvolutionChain = props => {
    const { evoChain } = props;
    if(!evoChain.chain) {
        return null
    }

    const babyItems = evoChain.baby_trigger_item ? <p>{evoChain.baby_trigger_item}</p> : null;
    const EvolutionWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        color: black;
    `

    const checkEvoChain = evolution => evolution.evolves_to && evolution.evolves_to.length > 0
    
    const checkEvolution = (evolution, arr = []) => {
        arr.push(evolution);
        if(checkEvoChain(evolution))evolution.evolves_to.map(cur => checkEvolution(cur, arr))
        return arr
    }
    const evolutionBranch = checkEvolution(evoChain.chain).map(cur => <Card
                onClick={props.onClick}
                key={cur.species.name} 
                id={getIDFromURL(cur.species.url)}
                name={cur.species.name}
        />)

    return (
    <div>
        <h4>Evolution Chain</h4>
        {babyItems}
            <EvolutionWrapper>{evolutionBranch}</EvolutionWrapper>
    </div>)
}

export default EvolutionChain;