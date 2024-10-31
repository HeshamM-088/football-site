import { configureStore } from "@reduxjs/toolkit";
import { homeMatches } from "./slices/home/matchesSlice";
import { highlight } from "./slices/youtube/highlightsSlice";
import { leagueStanding } from "./slices/home/standingLeagueSlice";

const store = configureStore({
  reducer: { homeMatches, leagueStanding, highlight },
});

export default store;
