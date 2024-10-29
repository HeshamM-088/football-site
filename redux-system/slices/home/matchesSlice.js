import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
TTY stands for today , tomorrow and yesterday
*/

export const getMatchesTTY = createAsyncThunk(
  "/getMatchesTTY",
  async (certianDate, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_APICORS}/api.football-data.org/v4/matches?date=${certianDate}`,
        headers: {
          "X-Auth-Token": "e191e07f2acf423296dd397ab4d29910",
        },
      });

      return res.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

const initialState = {
  TTY_Loading: true,
  TTY_Data: null,
  TTY_Error: null,
};

const matchSlice = createSlice({
  name: "home_matches",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMatchesTTY.pending, (state) => {
      state.TTY_Loading = true;
    });
    builder.addCase(getMatchesTTY.fulfilled, (state, action) => {
      state.TTY_Loading = false;
      state.TTY_Data = action.payload.matches;
    });
    builder.addCase(getMatchesTTY.rejected, (state, action) => {
      state.TTY_Loading = false;
      state.TTY_Error = action.payload.message;
    });
  },
});

export const homeMatches = matchSlice.reducer;
