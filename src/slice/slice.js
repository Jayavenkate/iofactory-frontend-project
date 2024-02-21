import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../global";

const initialState = {
  movieList: [],
  selectedmovie: {},
  isLoading: false,
  error: "",
};

//get action

export const getmovieFromServer = createAsyncThunk(
  "movie/getmovieFromServer",
  async () => {
    const response = await axios.get(`${URL}/getmovie`);
    const jsonresponse = await response.data;
    return jsonresponse;
  }
);

//post method

export const addTaskToServer = createAsyncThunk(
  "movie/addmoviestoDb",
  async (movies) => {
    const response = await axios.post(`${URL}/createmovie`, movies);
    const jsonresponse = await response.data;
    console.log("addjsondata", jsonresponse);
    return jsonresponse;
  }
);

//getmoviebyid

export const getMovieById = createAsyncThunk(
  "movie/getMovieById",
  async (id) => {
    try {
      const response = await axios.get(`${URL}/getmovie/${id}`);
      const jsonresponse = await response.data;
      return jsonresponse;
    } catch (err) {
      throw Error("Failed to fetch movie by id");
    }
  }
);
//update

export const updateTaskToServer = createAsyncThunk(
  "movie/updateTaskToServer",
  async ({ movies, id }) => {
    const response = await axios.put(`${URL}/edit/${id}`, movies);
    const jsonresponse = await response.data;
    console.log("updatejsondata", jsonresponse);
    return jsonresponse;
  }
);
//delete

export const deleteTaskToServer = createAsyncThunk(
  "movie/deleteTaskToServer",
  async ({ movies, id }) => {
    const response = await axios.delete(`${URL}/delete/${id}`, movies);
    const jsonresponse = await response.data;
    console.log("deletejsondata", jsonresponse);
    return jsonresponse;
  }
);
const movieslice = createSlice({
  name: "movieSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getmovieFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getmovieFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.movieList = action.payload;
      })
      .addCase(getmovieFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.movieList = [];
      })
      .addCase(addTaskToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTaskToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.movieList.push(action.payload);
      })
      .addCase(addTaskToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(getMovieById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.selectedmovie = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.selectedmovie = {};
      })
      .addCase(updateTaskToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTaskToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.movieList = state.movieList.map((list) =>
          list.id === action.payload.id ? action.payload : list
        );
      })
      .addCase(updateTaskToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteTaskToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTaskToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.movieList = state.movieList.filter(
          (movie) => movie.id !== action.payload.id
        );
      })
      .addCase(deleteTaskToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export default movieslice.reducer;
