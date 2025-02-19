import { createSelector } from '@reduxjs/toolkit';

const selectCharactersState = (state) => state.characters; // Selector function that returns the characters state

// Selector function that processes the characters state and returns the filtered/sorted characters
export const selectFilteredCharacters = createSelector( 
  [selectCharactersState], // Input selector that provides the characters state
  (charactersState) => { // Output function that processes the characters state and returns the filtered/sorted characters
    const { characters, filters, searchQuery, sortOrder } = charactersState; // Destructures the characters state
    let filteredCharacters = [...characters]; // Creates a copy of the characters array without mutating the original array

    if (filters.species.length > 0) { //Checks if filter.species [] is not empty and Filters characters based on species
      filteredCharacters = filteredCharacters.filter(character =>
        filters.species.includes(character.species) 
      );
    }

    if (filters.gender.length > 0) { //Checks if filter.gender [] is not empty and Filters characters based on gender
      filteredCharacters = filteredCharacters.filter(character =>
        filters.gender.includes(character.gender) 
      );
    }

    if (filters.origin.length > 0) { //Checks if filter.origin [] is not empty and Filters characters based on origin
      filteredCharacters = filteredCharacters.filter(character =>
        filters.origin.includes(character.origin.name) 
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