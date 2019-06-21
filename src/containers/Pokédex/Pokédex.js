import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Body from '../../components/Body/Body';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';

const Pokedex = props => {
    const { theme } = props;
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
    
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(res => res.data)
        .then(data => setPokemon(data.results))
        
    }, [])
    const StyledPokedex = styled.div`
        height: 100vh;
        width: 100vw;
    `    
    console.log(pokemon)


    return (
    <StyledPokedex>
        <Body theme={theme}>

            <CardList items = {pokemon}/>
        </Body>
    </StyledPokedex>)
}

export default Pokedex;