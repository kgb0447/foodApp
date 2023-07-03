import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";
import { RootState } from "../../store/store";

export interface selectedProduct {
    isLoading: boolean,
    active_category: any,
    error: any

}
const initialState:selectedProduct = {
    isLoading: false,
    active_category: {},
    error: "",
}

export const setActiveData = createAsyncThunk("setActiveData", 
async(item:string) => {
  const res = await client.fetch(
    `*[_type == "category" && name == $category]{
        ...,
        dishes[]->{
        ...,
        }
    }`,
    {category:item}
  );
   console.log(res,"parammm")
  return res;
});
const activeServiceSlice = createSlice({
    name: 'activeProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setActiveData.pending, (state:any) => {
            state.isLoading = true;
        });
        builder.addCase(setActiveData.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload[0], "payload");
        state.active_category = action.payload[0];
        
    });
        builder.addCase(setActiveData.rejected, (state:any,action) => {
            state.error = action.error
        })
    }
})

export default activeServiceSlice.reducer;
