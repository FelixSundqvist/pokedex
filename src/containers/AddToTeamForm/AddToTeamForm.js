import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import * as actionTypes from '../../store/actions/actionTypes';
import Types from '../../components/PokedexInfo/Types/Types';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Modal/Backdrop';
import { natures } from './natures/natures';
import PkmnIcon from '../../components/UI/PkmnIcon/PkmnIcon';

const Form = styled.form`
height: 100%;
width: 100%;
margin: 16px;
`
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
const StatsWrapper = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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

const AddToTeamForm = ({ pokemon, theme, setPkmn, addPokemon }) => {
   
    const [ pokemonMoves, setPokemonMoves ] = useState([
        {move: ""},
        {move: ""},
        {move: ""},
        {move: ""},
    ])
    const [pokeAbility, setPokeAbility] = useState("");
    const [selectedNature, setSelectedNature ] = useState("")
    const [warning, setWarning] = useState(null)
    const [pokemonIV, setPokemonIV] = useState([0, 0, 0, 0, 0, 0])

    
    useEffect(() => {
        setPokemonMoves([
            {move: pokemon.moves[0].move.name},
            {move: pokemon.moves[1].move.name},
            {move: pokemon.moves[2].move.name},
            {move: pokemon.moves[3].move.name},
        ])

        setPokeAbility(pokemon.abilities[0].ability.name);
        setSelectedNature(natures[0])
    }, [pokemon.abilities, pokemon.moves])

    const changeMove = (e, id) => {
        e.preventDefault();
        const pokemonMoveCopy = [...pokemonMoves]
        
        const test = pokemonMoveCopy.map((c, index) => id !== index ? e.target.value === c.move : false)
        
        if(test.some(id => id === true) ){
            pokemonMoveCopy[id].move = pokemonMoves[id].move;
           return setWarning(<Warning>Please select only one of each move</Warning>)
        }else{
            setWarning(null)
            pokemonMoveCopy[id].move = e.target.value
            setPokemonMoves(pokemonMoveCopy)
        }
        
    }
    const setValue = (value, func) => func(value)
    const ivs =  Array.from(Array(32), ((cur, index) => <option key={index} value={index}>{index}</option> ))
    
    const stats = pokemon.stats.map(
        (stat, index )=> 
            <div key={stat.stat.name}>
                <div>{stat.stat.name}: {stat.base_stat} + {pokemonIV[index]}</div>


                <select value={pokemonIV[index]} onChange={(e) => {
                        const ivs = [...pokemonIV];
                        ivs[index] = e.target.value;
                        setPokemonIV(ivs)
                }}>
                    {ivs}
                </select>
     

            </div>);

    const types = pokemon.types.map(cur => <Types key={cur.type.name} type={cur.type.name} />).reverse()
    const moves = Array.from(Array(4), (cur, id) => 
        <Move key={id + "move"}> 
            <select value={pokemonMoves[id].move} onChange={e => changeMove(e, id)}>
                { 
                    pokemon.moves.map(cur => 
                        <option key={cur.move.name} value={cur.move.name}>{cur.move.name}</option>)
                }
            </select>
        </Move>
    )

    const natureOptions =(
    <ItemWrapper style={{display: "block"}}> 
        <select 
            value={selectedNature.name}
            onChange={e => setValue(natures.filter(current => current.name === e.target.value)[0], setSelectedNature)}
            >{natures.map(cur => 
                <option key={cur.name} value={cur.name}>{cur.name}</option>
            )}
        </select>
        <br />
        Increase: <p style={{color: "green"}}>{selectedNature.inc} </p>
        Decrease: <p style={{color: "red"}}>{selectedNature.dec} </p>
    </ItemWrapper>)

    const abilities =( 
    <ItemWrapper>
        <select 
            value={pokeAbility} 
            onChange={e => setValue(e.target.value, setPokeAbility)}>
                {pokemon.abilities.map(cur => <option value={cur.ability.name} key={cur.ability.name}>{cur.ability.name}</option>)}
        </select>
    </ItemWrapper>)


    const submit = (e, pokemonMoves) => {
        addPokemon(
            {
                name: pokemon.name, 
                moves: pokemonMoves, 
                ability: pokeAbility, 
                stats: pokemon.stats, 
                nature: selectedNature,
                IVs: pokemonIV
            }
        )
        setPkmn(null);
    }

    const form = (
    <Modal>
        <h1>{pokemon.name}</h1>
        <PkmnIcon name={pokemon.name} />
        <TypeWrapper>
            { types }
        </TypeWrapper>
        
        <Form onChange={e => e.preventDefault()}>
            <h2>Stats</h2>
            <StatsWrapper>
                {stats}
            </StatsWrapper>

            <h2>Ability</h2>
            {abilities}
            <h2>Nature</h2>
            {natureOptions}
            
            {warning}
            <h2>Moves</h2>
            <ItemWrapper>
                {moves}
            </ItemWrapper>
            <Button onClick={(e) => submit(e, pokemonMoves)}>Add</Button>
        </Form>
    </Modal>)

    return (<><Backdrop onClick={() => setPkmn(null)} />{ form }</>)
}

const mapDispatchToProps = dispatch => ({
    addPokemon: (pokemon) => dispatch({type: actionTypes.ADD_TO_TEAM, addPokemon: pokemon}) 
}) 

export default connect(null, mapDispatchToProps)(withTheme(AddToTeamForm));