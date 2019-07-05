import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemons:[],
    pokemonTeam:[
        
    ],

    selectedGen: 0,
    selectedPokemonId: "",
    selectedPokemon: {},
    pokedexInfo: {},
    evolutionChain: {},
    isLoadingPokemons: false,
    isLoadingCurrent: false,
    fetchPokemonError: false,
    fetchCurrentPokemonError: false,
    fetchEvoChainError: false
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
const fetchPkmnFail = state => newState(state, {
    isLoadingPokemons: false,
    fetchPokemonError: true
})
const fetchCurrentPkmnSuccess = (state, action) => newState(state, {
    isLoadingCurrent: false,
    selectedPokemonId: action.selectedPokemonId,
    selectedPokemon: action.selectedPokemon,
    pokedexInfo: action.pokedexInfo,
    fetchCurrentPokemonError: false,
})

const fetchCurrentPkmnFail = (state, action) => newState(state, {
    isLoadingCurrent: false,
    fetchCurrentPokemonError: true,
})

const addToTeam = (state, addPokemon) => {
    if(state.pokemonTeam.length <= 6){
        return newState(state, {pokemonTeam: [...state.pokemonTeam, {...addPokemon, id: state.pokemonTeam.length} ]})
    }else {
        return state
    }
}

const removeFromTeam = (state, action) => {
    return {
        ...state,
        pokemonTeam: [...state.pokemonTeam]
        .filter(currentPokemon => currentPokemon.id !== action.id)
    }

}

const reducer = (state = initialState, action) => {
    const updateState = newState.bind(null, state);
    
    switch(action.type){
        case(actionTypes.FETCH_PKMN_SUCCESS): 
            return fetchPkmnSuccess(state, action.pokemons);
        case(actionTypes.FETCH_PKMN_FAIL):
            return fetchPkmnFail(state);
        case(actionTypes.CHANGE_GEN):
            return updateState({selectedGen: action.selectedGen})
        case(actionTypes.FETCH_CURRENT_PKMN_SUCCESS):
            return fetchCurrentPkmnSuccess(state, action)
        case(actionTypes.FETCH_CURRENT_PKMN_FAIL):
            return fetchCurrentPkmnFail(state)
        case(actionTypes.LOADING_POKEMONS):
            return updateState({isLoadingPokemons:true})
        case(actionTypes.LOADING_CURRENT_PKMN):
            return updateState({isLoadingCurrent: true})
        case(actionTypes.FETCH_EVO_CHAIN_SUCCESS):
            return updateState({evolutionChain: action.evolutionChain})
        case(actionTypes.ADD_TO_TEAM):
            return addToTeam(state, action.addPokemon)
        case(actionTypes.REMOVE_FROM_TEAM):
            return removeFromTeam(state, action)
        default:
            return state;
    }
}

export default reducer;