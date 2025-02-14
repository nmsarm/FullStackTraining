import { createSelector } from '@reduxjs/toolkit';

const selectCharactersState = (state) => state.characters;

export const selectFilteredCharacters = createSelector(
  [selectCharactersState],
  (charactersState) => {
    const { characters } = charactersState;
    let filteredCharacters = [...characters];
    return filteredCharacters;
  }
);