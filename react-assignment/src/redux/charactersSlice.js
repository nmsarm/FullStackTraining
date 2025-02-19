import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Fetch API character data
export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async () => {
    const response = await fetch(  
        "https://rickandmortyapi.com/api/character/"
    );
    return await response.json();
});

// Creates slice for character data
const charactersSlice = createSlice({ 
  name: 'characters',
  initialState: {
    characters: [], 
    loading: false, 
    error: null, 
    filters: {
      species: [],
      gender: [],
      origin: []
    },
    searchQuery: '',
    sortOrder: ''
  },
  reducers: {
    setCharacters(state, action) { // Set Characters state
      state.characters = action.payload;
    },
    setLoading(state, action) { // Set Loading state
      state.loading = action.payload;
    },
    setError(state, action) { // Set Error state
      state.error = action.payload;
    },
    setFilters(state, action) { // Adds or removes filters based on user input.
      const { name, value, checked } = action.payload;
      if (checked) { // If checked is true, add the value to the filters array.
        state.filters[name].push(value);
      } else { // If checked is false, remove the value from the filters array.
        state.filters[name] = state.filters[name].filter(item => item !== value);
      }
    },
    removeFilter(state, action) { //  Removes a specific filter.
      const { name, value } = action.payload;
      state.filters[name] = state.filters[name].filter(item => item !== value);
    },
    setSearchQuery(state, action) { // Sets the search query.
      state.searchQuery = action.payload;
    },
    setSortOrder(state, action) { // Sets the sort order.
      state.sortOrder = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => { // Sets loading state to true when fetchCharacters is pending
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => { // Sets loading state to false and updates characters state when fetchCharacters is fulfilled
        state.loading = false;
        state.characters = action.payload.results;
      })
      .addCase(fetchCharacters.rejected, (state, action) => { // Sets loading state to false and updates error state when fetchCharacters is rejected
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCharacters, setLoading, setError, setFilters, removeFilter, setSearchQuery, setSortOrder } = charactersSlice.actions;

export default charactersSlice.reducer; // Used in the store.js file to access the characters state