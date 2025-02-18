import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//fetch api 
export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async () => {
    const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
    );
    return await response.json();
});

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
    setCharacters(state, action) {
      state.characters = action.payload;
    },
    setLoading(state, action) { 
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setFilters(state, action) {
      const { name, value, checked } = action.payload;
      if (checked) {
        state.filters[name].push(value);
      } else {
        state.filters[name] = state.filters[name].filter(item => item !== value);
      }
    },
    removeFilter(state, action) {
      const { name, value } = action.payload;
      state.filters[name] = state.filters[name].filter(item => item !== value);
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCharacters, setLoading, setError, setFilters, removeFilter, setSearchQuery, setSortOrder } = charactersSlice.actions;

export default charactersSlice.reducer;