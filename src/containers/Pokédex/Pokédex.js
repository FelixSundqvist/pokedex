import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Wrapper from '../../components/Wrapper/Wrapper';
import Loading from '../../components/UI/Loading/Loading';
import CardList from '../../components/CardList/CardList';
import GBScreen from '../../components/GBScreen/GBScreen';

const Pokedex = React.memo(props => {
    const { fetchAllPokemons, selectedGen  } = props;
    const pokemons = useRef(null);
    pokemons.current = !props.isLoading 
    useEffect(() => {
        fetchAllPokemons(selectedGen)
    }, [selectedGen, fetchAllPokemons])

    pokemons.current = !props.isLoading
        ?   <CardList 
                selected={props.selected}
                onClick={(id) => props.history.push("/id="+id)} 
                items = {props.pokemons} /> 
        : null;
    /* const scroll = e => console.log(e) */
    return (<Wrapper><GBScreen>{pokemons.current}</GBScreen></Wrapper>)
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