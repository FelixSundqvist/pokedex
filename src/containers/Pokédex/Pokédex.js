import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import Body from '../../components/Body/Body';
import * as actionTypes from '../../store/actions/actionTypes';
import Wrapper from '../../components/Wrapper/Wrapper';

const Pokedex = React.memo(props => {
    const { fetchAllPokemons, selectedGen, selectedPokemonId } = props;
    
    useEffect(() => {
        fetchAllPokemons(selectedGen)
    }, [selectedGen, fetchAllPokemons])
    const body = !props.isLoading
        ?        
        <Body 
            pokemons={props.pokemons}
            loadingCurrent = {props.isLoadingCurrent}
            selected = {selectedPokemonId}
            /> : null
 
    return (
    <Wrapper>
        {body}
    </Wrapper>)
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Pokedex));