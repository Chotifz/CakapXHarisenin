import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedCategory: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.list = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
