import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// standing for league

export const getLeagueStanding = createAsyncThunk("/getLeagueStanding", async(leagueCode, ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI;
    try {
        const response = await axios.post("/api/football", {
          url: `http://api.football-data.org/v4/competitions/${leagueCode}/standings?season=2024`,
        });
        return response.data;

    }catch(er){
        return rejectWithValue(er)
    }
})

// initialState
const initialState = {
    standingData: [],
    standingLoading: true,
    standingError: null,
}

// Slice
const standingLeague = createSlice({
    name: "Leagues_standing",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getLeagueStanding.pending, (state, action)=>{
            state.standingLoading = true
        });
        builder.addCase(getLeagueStanding.fulfilled, (state, action)=>{
            state.standingLoading = false;
            state.standingData = action.payload.standings[0].table;
        });
        builder.addCase(getLeagueStanding.rejected, (state, action)=>{
            state.standingLoading = false;
            state.standingError = action.payload;
        });
    }
})

export const leagueStanding = standingLeague.reducer;