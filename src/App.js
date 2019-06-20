import React from 'react';
import { withTheme } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import Pokedex from './containers/Pokédex/Pokédex';


function App({ theme }) {
  return (
    <div className="App">
      <Header theme = {theme} />
      <Pokedex theme = { theme } />
    </div>
  );
}

export default withTheme(App);
