import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import Body from '../Body/Body';
import * as actionTypes from '../../store/actions/actionTypes';
import PokedexButtons from './PokedexButtons';

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
    <div style={{flex: "1"}}>
        <PokedexButtons theme={props.theme} genClick={props.genClick}/>
        {body}
    </div>)
})
const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
    selectedGen: state.selectedGen,
    selectedPokemonId: state.selectedPokemonId,
    isLoadingCurrent: state.isLoadingCurrent
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPokemons: (selectedGen) => dispatch({type: actionTypes.FETCH_PKMN_START, selectedGen: selectedGen}),
    genClick: (gen) => dispatch({ type: actionTypes.CHANGE_GEN, selectedGen: gen }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Pokedex));