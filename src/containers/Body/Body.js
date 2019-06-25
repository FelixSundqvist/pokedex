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
        padding: 5vh;
        background-color: ${ props.theme.palette.primaryDark };
    `
    const BodyContainer = styled.div`
        position: relative;
        margin: 0 auto;
        width: 80%;
        display: flex;

        align-items:center;
        justify-content: center;

        @media screen and (max-width: 500px){
            height: 300px;
            width: 300px;
        }
    `
    const GB = styled.div`
        height: 500px;
        width: 500px; 
    `

    pokemons.current = !props.isLoading 
    ? <CardList 
        selected={props.selected}
        onClick={(id) => props.history.push("/id="+id)} 
        items = {props.pokemons} /> 
    : <Loading />
    return (
        <Body>
            <BodyContainer>
            <GB>
                <GBScreen>
                
                    {pokemons.current}

                </GBScreen>
            </GB> 
            </BodyContainer>
        </Body>

    )
}
export default withRouter(withTheme(Body));