import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import * as actionTypes from '../../store/actions/actionTypes';
import Types from '../../components/PokedexInfo/Types/Types';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Modal/Backdrop';

const AddToTeamForm = ({ pokemon, theme, setPkmn, addPokemon }) => {
   
    const [ pokemonMoves, setPokemonMoves ] = useState([
        {move: ""},
        {move: ""},
        {move: ""},
        {move: ""},
    ])
    const [pokeAbility, setPokeAbility] = useState("");
    const [warning, setWarning] = useState(null)

    useEffect(() => {
        setPokemonMoves([
            {move: pokemon.moves[0].move.name},
            {move: pokemon.moves[1].move.name},
            {move: pokemon.moves[2].move.name},
            {move: pokemon.moves[3].move.name},
        ])

        setPokeAbility(pokemon.abilities[0].ability.name);
    }, [])

    const ItemWrapper = styled.div`
        width: 90%;
        height: auto;
        padding: 16px;
        margin: 16px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 2px 2px 4px 2px #ccc;
    `
    const Move = styled.div`
        border-radius: 1vh;
        flex: 0 0 40%;
        border: 2px solid black;
        padding: 16px;
        margin: 8px;
        text-transform: capitalize;
    `
    const TypeWrapper = styled.div`
        margin: 16px auto;
    `
    const Warning = styled.h3`
        color: red;
    `

    const changeMove = (e, id) => {
        e.preventDefault();
        const pokemonMoveCopy = [...pokemonMoves]
        
        const test = pokemonMoveCopy.map((c, index) => {
            if(id !== index){
  
                return e.target.value === c.move
                
            }else{
                return false
            }})

        if(test.some(id => id === true) ){
            pokemonMoveCopy[id].move = pokemonMoves[id].move;
           return setWarning(<Warning>Please select only one of each move</Warning>)
        }else{
            setWarning(null)
            pokemonMoveCopy[id].move = e.target.value
            setPokemonMoves(pokemonMoveCopy)
        }
        
    }

    /* const stats = pokemon.stats.map(cur => <p>{cur.stat.name}: {cur.base_stat}</p>); */
    const types = pokemon.types.map(cur => <Types key={cur.type.name} type={cur.type.name} />).reverse()
    const options = pokemon.moves.map(cur => <option key={cur.move.name} value={cur.move.name}>{cur.move.name}</option>)
    const moves = Array.from(Array(4), (cur, id) => <Move 
        key={id + "move"}
    > 
        <select 
            value={pokemonMoves[id].move} 
            onChange={e => changeMove(e, id)}>
            {options}
        </select></Move>
    )

    const abilities =( 
    <ItemWrapper>
        <select 
            value={pokeAbility} 
            onChange={e => setPokeAbility(e.target.value)}>
                {pokemon.abilities.map(cur => <option value={cur.ability.name} key={cur.ability.name}>{cur.ability.name}</option>)}
        </select>
    </ItemWrapper>)

    const submit = (e, pokemonMoves) => {
        addPokemon({name: pokemon.name, moves: pokemonMoves, ability: pokeAbility})
        setPkmn(null);
    }

    const form = (<Modal>
    <h1>{pokemon.name}</h1>
    <img src={`http://felixsundqvist.org/pokemon/icons/regular/${pokemon.name}.png`} alt={pokemon.name} /> 
        <TypeWrapper>
            { types }
        </TypeWrapper>
        
        {warning}

        <form>
            <h2>Ability</h2>
            {abilities}
            <h2>Moves</h2>
            <ItemWrapper>
                {moves}
            </ItemWrapper>
            <Button onClick={(e) => submit(e, pokemonMoves)}>Add</Button>
        </form>
    </Modal>)

    return (
    <>
        <Backdrop onClick={() => setPkmn(null)} />
        { form }
    </>)
}

const mapDispatchToProps = dispatch => ({
    addPokemon: (pokemon) => dispatch({type: actionTypes.ADD_TO_TEAM, addPokemon: pokemon}) 
}) 

export default connect(null, mapDispatchToProps)(withTheme(AddToTeamForm));