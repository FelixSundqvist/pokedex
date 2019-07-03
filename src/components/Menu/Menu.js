import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Modal/Backdrop';
import WarningButton from '../UI/WarningButton/WarningButton';

const Menu = ({ pokemonTeam }) => {
    
    const [showModal, setShowModal] = useState(null);

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

    const Pokeball = styled.div`
        position: relative;
        box-shadow: 2px 2px 3px #ccc;
        height: 30px;
        width: 30px;
        border: 2px solid black;
        margin: 8px;
        border-radius: 50%;
        background-position: 50% 50%;
        background-size: contain;
        background-repeat: no-repeat;
        &:hover{
            cursor: pointer;
            transform: scale(1.01);
        }
    `
    const PokeballItemWrapper = styled.div`
        width: 80%;
        margin: 16px auto;
        box-shadow: 2px 2px 4px 2px #ccc;
        display: flex;
        flex-direction: column;
        justify-content: center;

        div:nth-child(even){
            background-color: #eee;
            padding: 8px;
        }
    `
    const pokeBallClick = (pokemon) => {
        if(pokemon){

            return setShowModal(<>
                <Backdrop onClick={() => setShowModal(null)}/>
                <Modal>
                
                    <h1>{pokemon.name}</h1>

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
    return<StyledMenu>{showModal}<Team>{pokeballs}</Team></StyledMenu>
}

export default Menu;