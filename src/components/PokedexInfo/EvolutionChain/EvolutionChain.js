import React from 'react';
import styled from 'styled-components';
import Card from '../../CardList/Card/Card';
import { getIDFromURL } from '../../../utility';

const EvolutionChain = props => {
    const { evoChain } = props;
    if(!evoChain.chain) {
        return null
    }
    const EvolutionWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        color: black;
    `
    const EvoMethod = styled.div`
        color: white; 
        border: 2px solid yellow;
        padding: 8px;
        font-size: .5rem;
    `
    const checkEvoChain = evolution => evolution.evolves_to && evolution.evolves_to.length > 0
    
    const checkEvolution = (evolution, arr = []) => {
        arr.push(evolution);
        if(checkEvoChain(evolution))evolution.evolves_to.map(cur => checkEvolution(cur, arr))
        return arr
    }

    const evolutionMethod = ({evolution_details}) => {
        if(evolution_details.length === 0 ){
            return
        }

        return evolution_details.map((cur, id) => Object.keys(cur)
            .map(currentMethod => {
                return cur[currentMethod] 
                ? <div key={currentMethod+id}>
                        <p>{currentMethod.replace(/_/g, ' ')}: 
                            {cur[currentMethod].name ? cur[currentMethod].name : cur[currentMethod]} 
                        </p> 
                        {
                            cur[currentMethod] && cur[currentMethod].name && currentMethod.includes("item") 
                            ? <img 
                                src={`http://felixsundqvist.org/pokemon/evo-item/${cur[currentMethod].name}.png`} 
                                alt={cur[currentMethod].name} /> 
                            : null
                        }
                    </div>
                : null})
            .filter(current => {

                if(current === null){
                    return false
                }else if(current && current.key.includes("trigger")){
                    return false;
                }
                else{
                    return true;
                }
            }))
        .reduce((a, b) => a.concat(b), []) // flatten
    };
    const evolutionBranch = checkEvolution(evoChain.chain).map((cur, id) => 
            <React.Fragment key={cur.species.name} >
                {
                    id > 0  
                        ? <EvoMethod>{evolutionMethod(cur)}</EvoMethod> 
                        : null
                }
            <Card
                onClick={props.onClick}
                id={getIDFromURL(cur.species.url)}
                name={cur.species.name}
                
            />
                          
            </React.Fragment>
    )

    return (
    <div>
        <h4>Evolution Chain</h4>
        <EvolutionWrapper>{evolutionBranch}</EvolutionWrapper>
    </div>
    )
}

export default EvolutionChain;