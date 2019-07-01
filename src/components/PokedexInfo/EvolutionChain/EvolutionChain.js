import React from 'react';
import Title from '../Titles/Title';
const Evolutions = React.lazy(() =>  import('./Evolutions'));

const EvolutionChain = props => {
    const { evoChain, onClick, show } = props;
    
    if(!evoChain.chain) {
        return null
    }

    const evolutions = show ? <Evolutions evoChain={evoChain} /> : null;

    return (
    <div>
        <Title onClick={onClick}>Evolution Chain</Title>
        { evolutions }
    </div>
    )
}

export default EvolutionChain;