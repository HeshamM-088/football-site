import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const callingYouTubeHighLight = createAsyncThunk(
  "/youtube",
  async (match, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    const homeTeam = match?.homeTeam.shortName;
    const awayTeam = match?.awayTeam.shortName;
    try {
      const response = await axios.post("/api/youtube", {
        url: `https://www.youtube.com/results?search_query=${homeTeam}+vs+${awayTeam}`,
      });

      const parser = new DOMParser();
      const docs = await parser.parseFromString(response.data, "text/html");

      const scripts = await Array.from(docs.querySelectorAll("script"));

      const extractedData = await scripts
        .map((script) => script.textContent)
        .filter((text) => text.includes("videoId")) // البحث عن جملة معينة في السكربت
        .map((text) => {
          const start = text.indexOf("{");
          const end = text.lastIndexOf("}");
          const jsonData = text.slice(start, end + 1);

          return JSON.parse(jsonData);
        })
        .filter(Boolean);

      return extractedData;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  tubeLoading: true,
  tubeData: null,
  tubeError: null,
};

const highlightsSlice = createSlice({
  name: "/callingYouTubeHighLight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(callingYouTubeHighLight.pending, (state) => {
      state.tubeLoading = true;
    });
    builder.addCase(callingYouTubeHighLight.fulfilled, (state, action) => {
      state.tubeLoading = false;
      state.tubeData =
        action.payload[0].contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].videoRenderer.videoId;
    });
    builder.addCase(callingYouTubeHighLight.rejected, (state, action) => {
      state.tubeLoading = false;
      console.log(action);
    });
  },
});

export const highlight = highlightsSlice.reducer;
