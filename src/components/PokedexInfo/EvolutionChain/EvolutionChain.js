import React from 'react'
import styled from 'styled-components';
import PkmnIcon from '../../UI/PkmnIcon/PkmnIcon';


const EvolutionWrapper = styled.div`
display: flex;
overflow: hidden;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
color: white;
`
const EvoItem = styled.span`
overflow: hidden;
`
const EvoMethodDiv = styled.div`   
padding: 8px;
margin: 8px;
min-width: 100px;
height: 100px;
word-wrap: break-word;
font-size: .4vw;
border: .1vw solid white;
overflow: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 768px){    
    height: 80px;
    font-size: 1vw;
}
`

const EvolutionChain = ({ evoChain }) => {

    if(evoChain.chain){
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
            ? <EvoItem key={ evolutionMethod + id } method={key[evolutionMethod].name}>
                    <div>{evolutionMethod.replace(/_/g, ' ')}: 
                        {key[evolutionMethod].name ? key[evolutionMethod].name : key[evolutionMethod]} 
                    </div>
                    {
                       
                        key[evolutionMethod] && key[evolutionMethod].name && evolutionMethod.includes("item") 
                        ? <PkmnIcon name={key[evolutionMethod].name} />
                        : null
                    }
                </EvoItem>
            : null
        }
    
        const filterEvolutionMethod = (evolutionMethod) => {
            
            if(evolutionMethod === null){
                return false
            }else if(evolutionMethod && evolutionMethod.key.includes("trigger") && evolutionMethod.props.method === "level-up"){
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
            <EvoMethodDiv key={cur.species.name} >
                <PkmnIcon name={cur.species.name} />
                {cur.species.name}
            </EvoMethodDiv>
    

        const createEvolutionMethodEl = (cur, id) => 
        <EvoMethodDiv key={cur + id}>
            {evolutionMethod(cur)}
        </EvoMethodDiv>
    
        const evolutionBranch = checkEvolution(evoChain.chain).map((currentBranch, id) => 
            <React.Fragment key={"branch"+ id}>
                {id > 0 ? <div>{currentBranch.map(createEvolutionMethodEl)}</div> : null}
                <div>{currentBranch.map(createEvolutionElements)}</div>
            </React.Fragment>)
    
        return <EvolutionWrapper>{evolutionBranch}</EvolutionWrapper>
    }
 
}   

export default EvolutionChain;