import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import generations from '../../PokemonGeneration';
import axiosInstance from '../../axiosInstance';
/* generations[actions.selectedGen].end */
function* startFetchAll(actions){
    try{
        yield put({type: actionTypes.LOADING_POKEMONS })
        const pokemons = yield call(() => axiosInstance(`/pokemon/?limit=${generations[actions.selectedGen].end}&offset=${generations[actions.selectedGen].start}`)
            .then(res => res.data)
            .then(data => data.results)
       );
       
        yield put({type: actionTypes.FETCH_PKMN_SUCCESS, pokemons: pokemons})
    }catch(e) {
        yield put({type: actionTypes.FETCH_PKMN_FAIL, error: e})
    }
}

function* startFetchSelected(actions){

    try{

        yield put({ type: actionTypes.LOADING_CURRENT_PKMN })

        const selectedPokemon = yield call(
            ()=> axiosInstance('https://pokeapi.co/api/v2/pokemon/'+actions.id)
                .then(res => res.data)
                .then(data => data)    
        );
                
        const species = actions.id.replace(/(-[a-z]{3,})?(-x|-y)?$/,"");
  
        const pokedexInfo = yield call(
            ()=> axiosInstance('https://pokeapi.co/api/v2/pokemon-species/'+species)
                .then(res => res.data)
                .then(data => data)); 
        
        yield put({type: actionTypes.FETCH_EVO_CHAIN_START, evoChainURL: pokedexInfo.evolution_chain.url})

        yield put({
            type: actionTypes.FETCH_CURRENT_PKMN_SUCCESS, 
            selectedPokemonId: actions.id,
            selectedPokemon: selectedPokemon,
            pokedexInfo: pokedexInfo,
        });
    }catch(e){
        yield put({type: actionTypes.FETCH_CURRENT_PKMN_FAIL, error: e});
    }
}

function* startFetchEvoChain(actions){
   try{ 
        const evoChain = yield call(
        () => axios.get(actions.evoChainURL))
        
        yield put({
        type: actionTypes.FETCH_EVO_CHAIN_SUCCESS,
        evolutionChain: evoChain.data
    })
   }catch(e){
    yield put({
        type: actionTypes.FETCH_EVO_CHAIN_FAIL
    })
   }
} 

function* mySaga() {
    yield takeEvery(actionTypes.FETCH_PKMN_START, startFetchAll);
    yield takeEvery(actionTypes.FETCH_CURRENT_PKMN_START, startFetchSelected);
    yield takeEvery(actionTypes.FETCH_EVO_CHAIN_START, startFetchEvoChain)
}

export default mySaga;