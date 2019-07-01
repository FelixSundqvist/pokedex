import React, { useEffect, useCallback } from 'react';
import { withTheme } from 'styled-components';
import { connect } from 'react-redux';
/* import GBController from '../../components/Body/GBController/GBController'; */
import GBScreen from '../../components/GBScreen/GBScreen';
import PokedexInfo from '../../components/PokedexInfo/PokedexInfo';
import Loading from '../../components/UI/Loading/Loading';

import * as actionTypes from '../../store/actions/actionTypes';
import Wrapper from '../../components/Wrapper/Wrapper';

const CurrentPokemon = React.memo((
    {
        theme,
        selectedPokemon, 
        pokedexInfo,
        isLoadingCurrent,
        match,
        history,
        fetchSelectedPokemon,
        fetchEvoChain,
        evoChain
    }) => {

    const fetch = useCallback(
        () => {
            fetchSelectedPokemon(match.params.id);
        },[match.params.id, fetchSelectedPokemon]
    )
    
    useEffect(() => { fetch() }, [fetch])

    const pokemon = !isLoadingCurrent ?                 
    <PokedexInfo 
        pokedexInfo={pokedexInfo} 
        selectedPokemon={selectedPokemon}
        evoChain={evoChain}
        evolutionClick={(id) => history.push("/id="+id)}
         /> : <Loading /> 

    return (
        <Wrapper>
            <GBScreen>
                { pokemon }
            </GBScreen>
        </Wrapper>
    )
});

const mapStateToProps = (state) => ({
    selectedPokemonId: state.selectedPokemonId,
    selectedPokemon: state.selectedPokemon,
    pokedexInfo: state.pokedexInfo,
    isLoadingCurrent: state.isLoadingCurrent,
    evoChain: state.evolutionChain
})

const mapDispatchToProps = (dispatch) => ({
    fetchSelectedPokemon: (id) => dispatch({type: actionTypes.FETCH_CURRENT_PKMN_START, id: id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(CurrentPokemon));