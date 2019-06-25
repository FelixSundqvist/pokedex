import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemons:[],
    selectedGen: 0,
    selectedPokemonId: "0",
    selectedPokemon: {},
    pokedexInfo: {},
    isLoadingPokemons: false,
    isLoadingCurrent: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.FETCH_PKMN_SUCCESS): 
            return {...state,
                isLoadingPokemons: false,
                pokemons:[
                ...action.pokemons, 
            ]};
        case(actionTypes.CHANGE_GEN):
            return{
                ...state,
                selectedGen: action.selectedGen
            }
        case(actionTypes.FETCH_CURRENT_PKMN_SUCCESS):
        return {
            ...state,
            isLoadingCurrent: false,
            selectedPokemonId: action.selectedPokemonId,
            selectedPokemon: action.selectedPokemon,
            pokedexInfo: action.pokedexInfo
        }
        case(actionTypes.LOADING_POKEMONS):
            return{
                ...state,
                isLoadingPokemons:true
            }
        case(actionTypes.LOADING_CURRENT_PKMN):
        return{
            ...state,
            isLoadingCurrent: true
        }
        default:
            return state;
    }
}

export default reducer;