import React from 'react';
import Title from '../Title/Title';
const Evolutions = React.lazy(() =>  import('./Evolutions'));

const EvolutionChain = props => {
    const { evoChain, onClick, show } = props;
    
    if(!evoChain.chain) {
        return null
    }

    const evolutions = show ? <Evolutions evoChain={evoChain} /> : null;

    return (
    <div>
        <Title onClick={onClick} show={show}>Evolution Chain</Title>
        { evolutions }
    </div>
    )
}

export default EvolutionChain;