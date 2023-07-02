import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serviceAPITypes } from "../../dto/serviceAPI";
import { client } from "../../client";

const initialState: serviceAPITypes = {
  dishes: [],
  categories: [],
  isLoading: false,
  error: null,
};

export const getData = createAsyncThunk("getData", async () => {
  const res = await client.fetch(
    `{
      'categories': *[_type in ["category"]] {
          image,
          dishes,
          name,
      },
      'dishes': *[_type in ["dish"]] {
          image,
          name,
          price,
          short_description,
          _id                   
      }
    }`
  );
  return res;
});
export const serviceAPISlice = createSlice({
  name: "serviceAPI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload, "payload");
      state.dishes = action.payload?.dishes;
      state.categories = action.payload?.categories;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default serviceAPISlice.reducer;
