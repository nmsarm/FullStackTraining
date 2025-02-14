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
  },
  reducers: {
    setCharacters(state, action) {
      state.characters = action.payload;
    },
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

export const { setCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;