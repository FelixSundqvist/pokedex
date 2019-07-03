import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PokedexInfo from '../../components/PokedexInfo/PokedexInfo';
import Loading from '../../components/UI/Loading/Loading';

import * as actionTypes from '../../store/actions/actionTypes';
import Wrapper from '../../components/Wrapper/Wrapper';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';
import AddToTeamForm from '../AddToTeamForm/AddToTeamForm';

const CurrentPokemon = React.memo((
    {
        selectedPokemon, 
        pokedexInfo,
        isLoadingCurrent,
        match,
        history,
        fetchSelectedPokemon,
        evoChain,
        fetchCurrentPokemonError
    }) => {
    const [currentPkmn, setPkmn] = useState(null);

    const fetch = useCallback(
        () => {
            fetchSelectedPokemon(match.params.id);
        },[match.params.id, fetchSelectedPokemon]
    )
    
    useEffect(() => { fetch() }, [fetch])

    let pokemon = <Loading />
    if(!isLoadingCurrent && !fetchCurrentPokemonError){
        pokemon = <PokedexInfo 
        addToTeam={(pokemon) => setPkmn(<AddToTeamForm setPkmn={setPkmn} pokemon={pokemon} />)}
        pokedexInfo={pokedexInfo} 
        selectedPokemon={selectedPokemon}
        evoChain={evoChain}
        evolutionClick={(id) => history.push("/id="+id)} /> 
    }else if(fetchCurrentPokemonError){
        pokemon = <ErrorHandler error1 />
    }             
    
    return (
        <>
        {currentPkmn}
        <Wrapper scanner> 
            {pokemon}
        </Wrapper>
        </>
    )
});

const mapStateToProps = (state) => ({
    selectedPokemonId: state.selectedPokemonId,
    selectedPokemon: state.selectedPokemon,
    pokedexInfo: state.pokedexInfo,
    isLoadingCurrent: state.isLoadingCurrent,
    evoChain: state.evolutionChain,
    fetchCurrentPokemonError: state.fetchCurrentPokemonError
})

const mapDispatchToProps = (dispatch) => ({
    fetchSelectedPokemon: (id) => dispatch({type: actionTypes.FETCH_CURRENT_PKMN_START, id: id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPokemon);