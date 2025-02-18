import { createSelector } from '@reduxjs/toolkit';

const selectCharactersState = (state) => state.characters;

export const selectFilteredCharacters = createSelector(
  [selectCharactersState],
  (charactersState) => {
    const { characters, filters, searchQuery, sortOrder } = charactersState;
    let filteredCharacters = [...characters]; // Creates a copy of the array

    if (filters.species.length > 0) { //Checks if filter.species [] is not empty
      filteredCharacters = filteredCharacters.filter(character =>
        filters.species.includes(character.species) //Filters characters based on species
      );
    }

    if (filters.gender.length > 0) { //Checks if filter.gender [] is not empty
      filteredCharacters = filteredCharacters.filter(character =>
        filters.gender.includes(character.gender) //Filters characters based on gender
      );
    }

    if (filters.origin.length > 0) { //Checks if filter.origin [] is not empty
      filteredCharacters = filteredCharacters.filter(character =>
        filters.origin.includes(character.origin.name) //Filters characters based on origin
      );
    }

    if (searchQuery) { 
      filteredCharacters = filteredCharacters.filter(character =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase()) //Filters characters based on search
      );
    }

    if (sortOrder === 'asc') { 
      filteredCharacters = filteredCharacters.sort((a, b) => a.id - b.id); //Sorts characters in ascending order
    } else if (sortOrder === 'desc') {
      filteredCharacters = filteredCharacters.sort((a, b) => b.id - a.id); //Sorts characters in descending order
    }

    return filteredCharacters;
  }
);