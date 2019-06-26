import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { withTheme } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import Pokedex from './containers/Pokédex/Pokédex';
import Loading from './components/Loading/Loading';
const CurrentPokemon = React.lazy(() => import('./containers/CurrentPokemon/CurrentPokemon'));

function App(props) {
  return (
    <div className="App" style={{backgroundColor: props.theme.palette.primary}}>
      <Header />
      <div style={
        { 
          width: "100%", 
          display: "flex", 
          flexWrap: "wrap",
          overflow: "hidden"
          }}>
        <Route path="/" component={Pokedex} />
        <Suspense fallback={<Loading />}>
          <Route path="/id=:id" component={CurrentPokemon} />
        </Suspense>
        
      </div>
    </div> 
  );
}

export default withTheme(App);
