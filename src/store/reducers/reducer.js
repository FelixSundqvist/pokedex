import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemons:[],
    selectedGen: 0,
    selectedPokemonId: "bulbasaur",
    selectedPokemon: {},
    pokedexInfo: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.FETCH_PKMN_SUCCESS): 
            return {...state, 
                pokemons:[
                ...action.pokemons
            ]};
        case(actionTypes.CHANGE_GEN):
            return{
                ...state,
                selectedGen: action.selectedGen
            }
        case(actionTypes.FETCH_CURRENT_PKMN_SUCCESS):
        return {
            ...state,
            selectedPokemon: action.selectedPokemon,
            pokedexInfo: action.pokedexInfo
        }
        default:
            return state;
    }
}

export default reducer;