import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
/* import GBController from '../../components/Body/GBController/GBController'; */
import GBScreen from '../../components/GBScreen/GBScreen';
import PokedexInfo from '../../components/PokedexInfo/PokedexInfo';
import Loading from '../../components/Loading/Loading';

import * as actionTypes from '../../store/actions/actionTypes';

const CurrentPokemon = React.memo((
    {
        theme,
        selectedPokemon, 
        pokedexInfo,
        isLoadingCurrent,
        match,
        fetchSelectedPokemon
    }) => {
    useEffect(() => { 
        fetchSelectedPokemon(match.params.id);
    },[fetchSelectedPokemon, match])

    const StyledFold = styled.div`
        position: relative;
        height: 800px;
        width: 800px;
        margin: 0 auto;
        background-color: ${theme.palette.primary};
        box-shadow: 5px 10px 10px ${theme.palette.black};
    `
    const ScreenWrapper = styled.div`
        height: 600px;
        width: 600px;
        margin: 16px auto;
        @media (max-width: 768px){
            height: 400px;
            width: 400px;
        }
    `
    
    const pokemon = !isLoadingCurrent ?                 
    <PokedexInfo pokedexInfo={pokedexInfo} selectedPokemon={selectedPokemon} /> : <Loading />

    return (
    <StyledFold>
        
        <ScreenWrapper>
            <GBScreen>
               { pokemon } 
            </GBScreen>
        </ScreenWrapper>

    
    </StyledFold>)
});

const mapStateToProps = (state) => ({
    selectedPokemonId: state.selectedPokemonId,
    selectedPokemon: state.selectedPokemon,
    pokedexInfo: state.pokedexInfo,
    isLoadingCurrent: state.isLoadingCurrent
})

const mapDispatchToProps = (dispatch) => ({
    fetchSelectedPokemon: (id) => dispatch({type: actionTypes.FETCH_CURRENT_PKMN_START, id: id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(CurrentPokemon));