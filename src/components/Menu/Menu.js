import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Modal/Backdrop';
import WarningButton from '../UI/WarningButton/WarningButton';
import PkmnIcon from '../UI/PkmnIcon/PkmnIcon';
import {Pokeball, PokeballItemWrapper} from './Pokeball'



const Menu = ({ pokemonTeam, removePkmn, theme }) => {
    
    const [showModal, setShowModal] = useState(null);
        const StyledMenu = styled.div`
        padding: 16px;
        background-color: ${ theme.palette.black };
        color: white;
        `
        const Team = styled.div`
        width: 90%;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color:  ${ theme.palette.primary };
        `
    const pokeBallClick = (pokemon, id) => {
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
                        <h2>Nature</h2>
                        <p>{pokemon.nature}</p>
                    </PokeballItemWrapper>

                    <PokeballItemWrapper>
                        <h2>Moves: </h2>
                        {pokemon.moves.map(cur => <div key={cur.move}>{cur.move}</div>)}
                    </PokeballItemWrapper>

                    <WarningButton onClick={() => {
                        removePkmn(id)
                        setShowModal(null)
                        }}>Remove</WarningButton>    
                </Modal>
            </>)
    
        }
    }
    
    const pokeballs = Array.from(Array(6), (cur, id) => 
        <Pokeball
            key={"pokeball" + id}
            onClick={() => pokeBallClick(pokemonTeam[id], id)}
            style={
                {backgroundImage:pokemonTeam[id] 
                    ? `url(http://felixsundqvist.org/pokemon/icons/regular/${pokemonTeam[id].name}.png`
                    : "none"
                }}>

            </Pokeball>)
    return<StyledMenu>{showModal}<h1>Team</h1><Team>{pokeballs}</Team></StyledMenu>
}
export default withTheme(Menu);