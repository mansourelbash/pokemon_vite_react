import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PokemonList from './views/PokemonList';
import PokemonDetails from './views/PokemonDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} /> 

          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
