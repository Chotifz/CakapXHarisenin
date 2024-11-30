const { configureStore } = require("@reduxjs/toolkit");
import partnersSlice from "./partners-list/partnersListSlice";
import categoriesSlice from "./courses/categoriesSlice";
import coursesListSLice from "./courses/coursesListSLice";
const store = configureStore({
  reducer: {
    courses: coursesListSLice,
    categories: categoriesSlice,
    partners: partnersSlice,
  },
});

export default store;
