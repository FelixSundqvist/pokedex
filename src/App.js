import React, { Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { withTheme } from 'styled-components';
import './App.css';
import Pokedex from './containers/Pokédex/Pokédex';
import Loading from './components/UI/Loading/Loading';
const CurrentPokemon = React.lazy(() => import('./containers/CurrentPokemon/CurrentPokemon'));

function App(props) {

  return (
    <div className="App" style={{backgroundImage: `linear-gradient(${props.theme.palette.primary}, ${props.theme.palette.primaryDark})`}}>
      <div style={
        { padding: "16px",
          width: "100%", 
          minHeight: "100vh"
          }}>
        <Suspense fallback={<Loading />}>
          <Route path="/id=:id" component={CurrentPokemon} />
        </Suspense>
        <Route path="/" component={Pokedex} />
      </div>
    </div> 
  );
}

export default withTheme(App);
