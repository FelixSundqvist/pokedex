import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Body from '../../components/Body/Body';
import CardList from '../../components/CardList/CardList';
import generations from '../../PokemonGeneration';
import * as actionTypes from '../../store/actions/actionTypes';

const Pokedex = props => {
    const { 
        theme, 
        selectedGen, 
        fetchAllPokemons, 
        genClick, 
        fetchSelectedPokemon,
        selectedPokemon, 
        selectedPokemonId,
        pokedexInfo
    } = props;

    const StyledPokedex = styled.div`
        height: 100vh;
        width: 100vw;
    `
    useEffect(() => {
        fetchAllPokemons(selectedGen)
    }, [selectedGen])

    useEffect(() => {
        fetchSelectedPokemon(selectedPokemonId);
    }, [selectedPokemonId]);
                
    /*<CardList 
    items = {props.pokemons} />*/

    return (
    <StyledPokedex>
        <Body 
            theme={theme} 
            generations={generations} 
            genClick={(gen) => genClick(gen)}
            selectedPokemon = {selectedPokemon}
            pokedexInfo = {pokedexInfo}>


        </Body>
    </StyledPokedex>)
}
const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
    selectedGen: state.selectedGen,
    selectedPokemonId: state.selectedPokemonId,
    selectedPokemon: state.selectedPokemon,
    pokedexInfo: state.pokedexInfo
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPokemons: (selectedGen) => dispatch({type: actionTypes.FETCH_PKMN_START, selectedGen: selectedGen}),
    fetchSelectedPokemon: (id) => dispatch({type: actionTypes.FETCH_CURRENT_PKMN_START, id: id}),
    genClick: (gen) => dispatch({ type: actionTypes.CHANGE_GEN, selectedGen: gen })
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);