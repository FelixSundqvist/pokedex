import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import './App.css';
import Pokedex from './containers/Pokédex/Pokédex';
import Loading from './components/UI/Loading/Loading';
import Menu from './components/Menu/Menu';
import * as actionTypes from './store/actions/actionTypes';

const CurrentPokemon = React.lazy(() => import('./containers/CurrentPokemon/CurrentPokemon'));

const StyledApp = styled.div`
padding: 16px;
width: 100%;
min-height: 100vh;
display: flex;
background-color: black;
@media screen and (max-width: 768px){
  padding: 0;
  flex-direction: column-reverse;
}
`

function App(props) {

  return (
    <div className="App">
      <Menu pokemonTeam={props.pokemonTeam} removePkmn={(id) => props.removePkmn(id)}/>

      <StyledApp>
        <Route path="/" component={Pokedex} />
        <Suspense fallback={<Loading />}>
          <Route path="/id=:id" component={CurrentPokemon} />
        </Suspense>
      </StyledApp>
    </div> 
  );
}

const mapStateToProps = state => ({
  pokemonTeam: state.pokemonTeam
})

const mapDispatchToProps = dispatch => ({
  removePkmn: (id) => dispatch({type: actionTypes.REMOVE_FROM_TEAM, id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(App));
