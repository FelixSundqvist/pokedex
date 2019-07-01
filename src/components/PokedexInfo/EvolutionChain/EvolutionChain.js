import React from 'react';
import styled from 'styled-components';
import Card from '../../CardList/Card/Card';
import { getIDFromURL } from '../../../utility';
import arrow from '../../../assets/arrow.svg';
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

    const EvoItem = styled.span`
        color: white;
    `
    const EvoMethodDiv = styled.div`
        height: 100px;
        width: 150px;
        margin: 10px;
        padding: 16px 0;
        font-size: .2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `
    const ArrowIcon = styled.img`
        display: block;
        height: 20px;
        margin: 16px auto;
        width: 20%;

    `
    const checkEvoChain = evolution => evolution.evolves_to && evolution.evolves_to.length > 0
    
    const checkEvolution = (evolution, arr = []) => {
        arr.push([evolution]);

        if(checkEvoChain(evolution)){
            if(evolution.evolves_to.length > 1){
                arr.push(evolution.evolves_to) 
            }else{
                evolution.evolves_to.map(cur => checkEvolution(cur, arr))
            }
        }
        return arr
    }

    const createEvoItems = (key, evolutionMethod, id) => {
        return key[evolutionMethod] 
        ? <EvoItem key={ evolutionMethod + id }>
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
            </EvoItem>
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
    
    const createEvolutionElements = (cur, id) => 
    <React.Fragment key={cur.species.name}>

        <Card
            onClick={props.onClick}
            id={getIDFromURL(cur.species.url)}
            name={cur.species.name}
            
        />              
    </React.Fragment>

    const createEvolutionMethodEl = (cur, id) => 
    <EvoMethodDiv key={cur + id}>
        {
            <>
                
                <div style={{flex: "1"}}>{evolutionMethod(cur)}</div>
                <ArrowIcon src={arrow} alt="arrow" />
            </>
        }
    </EvoMethodDiv>

    const evolutionBranch = checkEvolution(evoChain.chain).map((currentBranch, id) => 
        <>
            {id > 0 ? <div>{currentBranch.map(createEvolutionMethodEl)}</div> : null}
            <div>{currentBranch.map(createEvolutionElements)}</div>
        </>)
    return (
    <div>
        <h4>Evolution Chain</h4>
        <EvolutionWrapper>{evolutionBranch}</EvolutionWrapper>
    </div>
    )
}

export default EvolutionChain;