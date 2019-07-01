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
        padding: 8px;
        font-size: .5rem;
    `
    const checkEvoChain = evolution => evolution.evolves_to && evolution.evolves_to.length > 0
    
    const checkEvolution = (evolution, arr = []) => {
        arr.push(evolution);
        if(checkEvoChain(evolution)){
            if(evolution.evolves_to.length > 1){
                /* arr.push(evolution.evolves_to) */
                evolution.evolves_to.map(cur => checkEvolution(cur, arr))
            }else{
                evolution.evolves_to.map(cur => checkEvolution(cur, arr))
            }
        }
        console.log(arr)
        return arr
    }

    const createEvoItems = (key, evolutionMethod, id) => {
        return key[evolutionMethod] 
        ? <div key={ evolutionMethod + id }>
                <p>{evolutionMethod.replace(/_/g, ' ')}: 
                    {key[evolutionMethod].name ? key[evolutionMethod].name : key[evolutionMethod]} 
                </p> 
                {
                    key[evolutionMethod] && key[evolutionMethod].name && evolutionMethod.includes("item") 
                    ? <img 
                        src={`http://felixsundqvist.org/pokemon/evo-item/${key[evolutionMethod].name}.png`} 
                        alt={key[evolutionMethod].name} /> 
                    : null
                }
            </div>
        : null
    }

    const filterEvolutionMethod = (evolutionMethod) => {
        if(evolutionMethod === null){
            return false
        }else if(evolutionMethod && evolutionMethod.key.includes("trigger")){
            return false;
        }
        else{
            return true;
        }
    }
    const evolutionMethod = ({evolution_details}) => {
        if(evolution_details.length === 0 ){
            return
        }

        return evolution_details.map((cur, id) => Object.keys(cur)
            .map(currentMethod => createEvoItems(cur, currentMethod, id))
            .filter(current => filterEvolutionMethod(current)))
        .reduce((a, b) => a.concat(b), []) // flatten
    };
    const evolutionBranch = checkEvolution(evoChain.chain).map((cur, id) => 
        <React.Fragment key={cur.species.name}>
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