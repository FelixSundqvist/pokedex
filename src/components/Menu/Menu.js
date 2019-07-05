import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Modal/Backdrop';
import WarningButton from '../UI/WarningButton/WarningButton';
import PkmnIcon from '../UI/PkmnIcon/PkmnIcon';
import {Pokeball, PokeballItemWrapper} from './Pokeball'

const StyledMenu = styled.div`
min-height: 10vh;
`
const Team = styled.div`
width: 90%;
margin: 16px auto;
box-shadow: 2px 2px 3px #ccc;
display: flex;
justify-content: center;
align-items: center;
`

const Menu = ({ pokemonTeam }) => {
    
    const [showModal, setShowModal] = useState(null);

    const pokeBallClick = (pokemon) => {
        if(pokemon){

            return setShowModal(<>
                <Backdrop onClick={() => setShowModal(null)}/>
                <Modal>
                
                    <h1>{pokemon.name}</h1>
                    <PkmnIcon name={pokemon.name} />
                    
                    <PokeballItemWrapper>
                        <h2>Stats</h2>
                        {pokemon.stats.map(cur => <div key={cur.stat.name}>{cur.stat.name}: {cur.base_stat}</div>)}
                    </PokeballItemWrapper>
                    <PokeballItemWrapper>
                        <h2>Ability: </h2>
                        <p>{pokemon.ability}</p>
                    </PokeballItemWrapper>

                    <PokeballItemWrapper>
                        <h2>Moves: </h2>
                        {pokemon.moves.map(cur => <div key={cur.move}>{cur.move}</div>)}
                    </PokeballItemWrapper>

                    <WarningButton>Remove</WarningButton>    
                </Modal>
            </>)
    
        }
    }
    
    const pokeballs = Array.from(Array(6), (cur, id) => 
        <Pokeball
            key={"pokeball" + id}
            onClick={() => pokeBallClick(pokemonTeam[id])}
            style={
                {backgroundImage:pokemonTeam[id] 
                    ? `url(http://felixsundqvist.org/pokemon/icons/regular/${pokemonTeam[id].name}.png`
                    : "none"
                }}>

            </Pokeball>)
    return<StyledMenu>{showModal}<h1>Team</h1><Team>{pokeballs}</Team></StyledMenu>
}

export default Menu;