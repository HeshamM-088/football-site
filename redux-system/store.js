import { configureStore } from "@reduxjs/toolkit";
import { homeMatches } from "./slices/home/matchesSlice";

const store = configureStore({
  reducer: { homeMatches },
});

export default store;
