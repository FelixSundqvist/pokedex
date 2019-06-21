import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Body from '../../components/Body/Body';
import CardList from '../../components/CardList/CardList';
import generations from '../../PokemonGeneration';
import * as actionTypes from '../../store/actions/actionTypes';

const Pokedex = props => {
    const { theme, selectedGen, fetchPokemon, genClick } = props;

    const StyledPokedex = styled.div`
        height: 100vh;
        width: 100vw;
    `
    useEffect(() => {
        fetchPokemon(selectedGen)
    }, [selectedGen])

    return (
    <StyledPokedex>
        <Body 
            theme={theme} 
            generations={generations} 
            genClick={(gen) => genClick(gen)}>

            <CardList items = {props.pokemons} />

        </Body>
    </StyledPokedex>)
}
const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
    selectedGen: state.selectedGen,
    selectedPokemonIndex: state.selectedPokemonIndex,
    selectedPokemon: state.selectedPokemon
})

const mapDispatchToProps = (dispatch) => ({
    fetchPokemon: (selectedGen) => dispatch({type: actionTypes.FETCH_PKMN_START, selectedGen: selectedGen}),
    genClick: (gen) => dispatch({type: actionTypes.CHANGE_GEN, selectedGen: gen})
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);