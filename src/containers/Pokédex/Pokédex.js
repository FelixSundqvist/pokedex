import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Wrapper from '../../components/Wrapper/Wrapper';
import CardList from '../../components/CardList/CardList';

const Pokedex = React.memo(props => {
    const { fetchAllPokemons, selectedGen  } = props;
    const pokemons = useRef(null);
    const innerScreen = useRef(null)

    pokemons.current = !props.isLoading 
    useEffect(() => {
        fetchAllPokemons(selectedGen)
    }, [selectedGen, fetchAllPokemons])

/*     useEffect(() => {
        const reference = innerScreen.current
        const scroll =  e => console.log(e)
       console.log(innerScreen)
        reference.addEventListener("onclick", scroll)
        return () => {
            reference.removeEventListener("onclick", scroll)
        }
    }, []) */

    const test = () => innerScreen.current.focus
    const testScroll = e =>{
        console.log(innerScreen)
        console.log(e)
        //TODO scroll top compare
    }
    pokemons.current = !props.isLoading
        ?   <CardList 
                selected={props.selectedPokemonId}
                onClick={(id) => props.history.push("/id="+id)} 
                items = {props.pokemons} /> 
        : null;
   
  
    return (<Wrapper onScroll={testScroll} genButtons ref={ innerScreen } onLoad={ test }>{pokemons.current}</Wrapper>)
})
const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
    selectedGen: state.selectedGen,
    selectedPokemonId: state.selectedPokemonId,
    isLoadingCurrent: state.isLoadingCurrent
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPokemons: (selectedGen) => dispatch({type: actionTypes.FETCH_PKMN_START, selectedGen: selectedGen}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);