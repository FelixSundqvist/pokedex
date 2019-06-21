import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import generations from '../../PokemonGeneration';

function* startFetch(actions){
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

function* mySaga() {
    yield takeEvery(actionTypes.FETCH_PKMN_START, startFetch);
}

export default mySaga;