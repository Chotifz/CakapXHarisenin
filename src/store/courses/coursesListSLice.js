import { fetchCourses } from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  page: 1,
  limit: 15,
  hasMore: true,
  filters: { orderBy: "", prakerjaFilter: false },
  loading: false,
};
export const fetchCoursesThunk = createAsyncThunk(
  "courses/fetchCourses",
  async ({ page, limit, filters }) => {
    const data = await fetchCourses({ page, limit, filters });

    return data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.list = [...state.list, ...action.payload.course];
    },
    resetCourses(state) {
      state.list = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage(state) {
      state.page += 1;
    },
    setOrderBy: (state, action) => {
      state.filters.orderBy = action.payload;
    },
    setFilter: (state, action) => {
      state.filters.prakerjaFilter = action.payload.prakerjaFilter;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoursesThunk.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload.data.course];
        state.hasMore = action.payload.data.course.length > 0;
        state.loading = false;
      })
      .addCase(fetchCoursesThunk.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch courses";
        state.loading = false;
      });
  },
});

export const {
  setCourses,
  resetCourses,
  incrementPage,
  setOrderBy,
  setFilter,
  setLoading,
} = coursesSlice.actions;
export default coursesSlice.reducer;
