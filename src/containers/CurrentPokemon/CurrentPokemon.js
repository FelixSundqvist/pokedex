import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PokedexInfo from '../../components/PokedexInfo/PokedexInfo';
import Loading from '../../components/UI/Loading/Loading';

import * as actionTypes from '../../store/actions/actionTypes';
import Wrapper from '../../components/Wrapper/Wrapper';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';

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

    const fetch = useCallback(
        () => {
            fetchSelectedPokemon(match.params.id);
        },[match.params.id, fetchSelectedPokemon]
    )
    
    useEffect(() => { fetch() }, [fetch])

    let pokemon = <Loading />
    if(!isLoadingCurrent && !fetchCurrentPokemonError){
        pokemon = <PokedexInfo 
        pokedexInfo={pokedexInfo} 
        selectedPokemon={selectedPokemon}
        evoChain={evoChain}
        evolutionClick={(id) => history.push("/id="+id)}
         /> 
    }else if(fetchCurrentPokemonError){
        pokemon = <ErrorHandler error1 />
    }             
    
    return (
        <Wrapper scanner>
            {pokemon}
        </Wrapper>
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