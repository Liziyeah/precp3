import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "characters",

  initialState: {
    apiCharacters: [],
    customCharacters: [],
    editingCharacter: null,
    searchQuery: "",
    userType: "admin",
  },

  reducers: {
    setApiCharacters: (state, action) => {
      state.apiCharacters = action.payload;
    },
    addCustomCharacter: (state, action) => {
      state.customCharacters.push(action.payload);
    },
    deleteCustomCharacter: (state, action) => {
      state.customCharacters = state.customCharacters.filter(
        (character) => character.id !== action.payload
      );
    },
    updateCustomCharacter: (state, action) => {
      const index = state.customCharacters.findIndex(
        (character) => character.id === action.payload.id
      );
      if (index !== -1) {
        state.customCharacters[index] = action.payload;
      }
    },
    setEditingCharacter: (state, action) => {
      state.editingCharacter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setApiCharacters,
  addCustomCharacter,
  deleteCustomCharacter,
  updateCustomCharacter,
  setEditingCharacter,
  setSearchQuery,
  setUserType,
} = characterSlice.actions;

export default characterSlice.reducer;
