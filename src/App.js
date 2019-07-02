import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import './App.css';
import Pokedex from './containers/Pokédex/Pokédex';
import Loading from './components/UI/Loading/Loading';
import Menu from './components/Menu/Menu';
const CurrentPokemon = React.lazy(() => import('./containers/CurrentPokemon/CurrentPokemon'));

function App(props) {
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
    
  return (
    <div className="App">
      <Menu />
      <StyledApp>
        <Route path="/" component={Pokedex} />
        <Suspense fallback={<Loading />}>
          <Route path="/id=:id" component={CurrentPokemon} />
        </Suspense>
        
      </StyledApp>
    </div> 
  );
}

export default withTheme(App);
