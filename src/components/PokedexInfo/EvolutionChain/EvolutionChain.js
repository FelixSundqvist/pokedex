import React from 'react';
import styled from 'styled-components';
import Card from '../../CardList/Card/Card';
import { getIDFromURL } from '../../../utility';
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
    const createArr = (arr, newItem) => {
        return [...arr, newItem]

    }
    const checkEvolution = (evolution, arr=[]) => {
        let newArr = createArr(arr, evolution)
        if(evolution.evolves_to && evolution.evolves_to.length >= 1){
            for(let i = 0;i < evolution.evolves_to.length; i++){
                newArr.push(...checkEvolution(evolution.evolves_to[i]))
            }
        }
        return newArr
    }
    const evolutionBranch = checkEvolution(evoChain.chain).map(cur => 
            <Card
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