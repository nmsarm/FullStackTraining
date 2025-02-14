import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharacters } from './redux/charactersSlice';
import Header from './components/Header';
import CharactersList from './components/CharactersList';
import Filter from './components/Filters';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      <Header /> 
      <div className="container-fluid">
          <div className="row">
            <Filter />
            <CharactersList />
          </div>
      </div>
    </div>
  );
}

export default App;
