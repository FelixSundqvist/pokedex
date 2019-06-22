import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import generations from '../../PokemonGeneration';

function* startFetchAll(actions){
    try{
       const pokemons = yield call(() => axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=${generations[actions.selectedGen].end}&offset=${generations[actions.selectedGen].start}`)
        .then(res => res.data)
        .then(data => data.results)
        .catch(err => alert(err))
       );
        yield put({type: actionTypes.FETCH_PKMN_SUCCESS, pokemons: pokemons})
    }catch(e) {
        yield put({type: actionTypes.FETCH_PKMN_FAIL, error: e})
    }
}

function* startFetchSelected(actions){
    try{
        const selectedPokemon = yield call(
            ()=> axios.get('https://pokeapi.co/api/v2/pokemon/'+actions.id)
            .then(res => res.data)
            .then(data => data)
            .catch(err => alert(err)));

        const pokedexInfo = yield call(
            ()=> axios.get('https://pokeapi.co/api/v2/pokemon-species/'+actions.id)
            .then(res => res.data)
            .then(data => data)
            .catch(err => alert(err)));  

        yield put({
            type: actionTypes.FETCH_CURRENT_PKMN_SUCCESS, 
            selectedPokemon: selectedPokemon,
            pokedexInfo: pokedexInfo});
    }catch(e){
        yield put({type: actionTypes.FETCH_CURRENT_PKMN_FAIL, error: e});
    }
}

function* mySaga() {
    yield takeEvery(actionTypes.FETCH_PKMN_START, startFetchAll);
    yield takeEvery(actionTypes.FETCH_CURRENT_PKMN_START, startFetchSelected);
}

export default mySaga;