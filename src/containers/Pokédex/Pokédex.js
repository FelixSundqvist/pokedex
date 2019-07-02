import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Wrapper from '../../components/Wrapper/Wrapper';
import CardList from '../../components/CardList/CardList';

const Pokedex = React.memo(props => {
    const { fetchAllPokemons, selectedGen  } = props;

    useEffect(() => {
        fetchAllPokemons(selectedGen)
    }, [selectedGen, fetchAllPokemons])

    const changePage = (event, id) =>{
        props.history.push("/id="+id)
    }

    const pokemons = !props.isLoading
        ?   <CardList 
                selected={props.selectedPokemonId}
                onClick={changePage} 
                items = {props.pokemons} /> 
        : null;
   
    return (<Wrapper genButtons>{ pokemons }</Wrapper>)
})
const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
    selectedGen: state.selectedGen,
    selectedPokemonId: state.selectedPokemonId,
    isLoadingCurrent: state.isLoadingCurrent
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPokemons: (selectedGen) => dispatch({type: actionTypes.FETCH_PKMN_START, selectedGen: selectedGen}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);