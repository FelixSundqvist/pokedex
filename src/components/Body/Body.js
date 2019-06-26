import React, { useRef } from 'react'
import styled, { withTheme } from 'styled-components';
import { withRouter } from 'react-router-dom';
import GBScreen from '../../components/GBScreen/GBScreen';
import CardList from '../../components/CardList/CardList';
import Loading from '../../components/Loading/Loading';

const Body = props => {
    const pokemons = useRef(null);
    
    const Body = styled.div`
        height: 100%;
        width: 100%;
    `

    const GB = styled.div`
        margin: 0 auto;
    `

    pokemons.current = !props.isLoading 
    ? <CardList 
        selected={props.selected}
        onClick={(id) => props.history.push("/id="+id)} 
        items = {props.pokemons} /> 
    : <Loading />
    return (
        <Body>

            <GB>
                <GBScreen>
                
                    {pokemons.current}

                </GBScreen>
            </GB> 

        </Body>

    )
}
export default withRouter(withTheme(Body));