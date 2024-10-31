import { configureStore } from "@reduxjs/toolkit";
import { homeMatches } from "./slices/home/matchesSlice";
import { highlight } from "./slices/youtube/highlightsSlice";

const store = configureStore({
  reducer: { homeMatches, highlight },
});

export default store;
