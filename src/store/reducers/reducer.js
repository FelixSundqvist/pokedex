import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemons:[],
    selectedGen: 0,
    selectedPokemonId: "0",
    selectedPokemon: {},
    pokedexInfo: {},
    evolutionChain: {},
    isLoadingPokemons: false,
    isLoadingCurrent: false
}
const newState = (oldState, newState) =>({
    ...oldState,
    ...newState
})
const fetchPkmnSuccess = (state, pokemons) => ({...state,
    isLoadingPokemons: false,
    pokemons:[
    ...pokemons, 
]})
const fetchCurrentPkmnSuccess = (state, action) => newState(state,{
    isLoadingCurrent: false,
    selectedPokemonId: action.selectedPokemonId,
    selectedPokemon: action.selectedPokemon,
    pokedexInfo: action.pokedexInfo
})

const reducer = (state = initialState, action) => {
    const updateState = newState.bind(null, state);
    
    switch(action.type){
        case(actionTypes.FETCH_PKMN_SUCCESS): 
            return fetchPkmnSuccess(state, action.pokemons);
        case(actionTypes.CHANGE_GEN):
            return updateState({selectedGen: action.selectedGen})
        case(actionTypes.FETCH_CURRENT_PKMN_SUCCESS):
            return fetchCurrentPkmnSuccess(state, action)
        case(actionTypes.LOADING_POKEMONS):
            return updateState({isLoadingPokemons:true})
        case(actionTypes.LOADING_CURRENT_PKMN):
            return updateState({isLoadingCurrent: true})
        case(actionTypes.FETCH_EVO_CHAIN_SUCCESS):
            return updateState({evolutionChain: action.evolutionChain})
        default:
            return state;
    }
}

export default reducer;