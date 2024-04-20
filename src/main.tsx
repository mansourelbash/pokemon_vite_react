import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import PokemonList from './views/PokemonList';
import PokemonDetails from './views/PokemonDetails';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
    </Routes>
  </Router>
</Provider>
)