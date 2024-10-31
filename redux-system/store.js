import { configureStore } from "@reduxjs/toolkit";
import { homeMatches } from "./slices/home/matchesSlice";
import { leagueStanding } from "./slices/home/standingLeagueSlice";

const store = configureStore({
  reducer: { homeMatches, leagueStanding },
});

export default store;
