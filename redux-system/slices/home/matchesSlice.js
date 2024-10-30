import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMatchesTTY = createAsyncThunk(
  '/getMatchesTTY',
  async (certianDate, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI

    try {
      const response = await axios.post('/api/football', {
        url: `https://api.football-data.org/v4/matches?date=${certianDate}`,
      })

      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  TTY_Loading: true,
  TTY_Data: null,
  TTY_Error: null,
}

const matchSlice = createSlice({
  name: 'home_matches',
  initialState,
  extraReducers: builder => {
    builder.addCase(getMatchesTTY.pending, state => {
      state.TTY_Loading = true
    })
    builder.addCase(getMatchesTTY.fulfilled, (state, action) => {
      state.TTY_Loading = false
      state.TTY_Data = action.payload.matches
    })
    builder.addCase(getMatchesTTY.rejected, (state, action) => {
      state.TTY_Loading = false
      state.TTY_Error = action.payload.message
    })
  },
})

export const homeMatches = matchSlice.reducer
