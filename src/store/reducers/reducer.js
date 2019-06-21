import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemons:[],
    selectedGen: 0,
    selectedPokemonIndex: 1,
    selectedPokemon: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.FETCH_PKMN_SUCCESS): 
            return {...state, 
                pokemons:[
                ...action.pokemons
            ]};
        case(actionTypes.CHANGE_GEN):
            console.log("change gen", action)
            return{
                ...state,
                selectedGen: action.selectedGen
            }      
        default:
            return state;
    }
}

export default reducer;