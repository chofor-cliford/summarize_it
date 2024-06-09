import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://article-extractor-and-summarizer.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY!,
    "x-rapidapi-host": process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST!,
  },
};


export const getSummary = createAsyncThunk("article/getSummary", async (url: string) => {
  const query = `${baseUrl}/summarize?url=${encodeURIComponent(
    url
  )}&length=3&lang=en`;

  try {
    const response = await fetch(query, options);
    const result = await response.text();
   
    return result;
  } catch (error) {
    console.error(error);
  }

});

const initialState: InitialStateProps = {
  data: {
    summary: ""
  },
  error: null,
  isFetching: true,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSummary.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getSummary.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data.summary = action.payload;
      })
      .addCase(getSummary.rejected, (state) => {
        state.isFetching = false;
        state.error = state.error.message; 
      });
  },
});

export default articleSlice.reducer;