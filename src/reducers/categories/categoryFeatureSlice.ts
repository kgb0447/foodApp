import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false
}
export const getCategories : any= createAsyncThunk(
    "category/getCategory",
     
    async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
);
const categoryFeatureSlice = createSlice({
    name: "getAPI",
    initialState,
    reducers: {},
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.isLoading = true;
        },
        [getCategories.fulfilled]:(state,{payload})=> {
            state.isLoading = false;
            state.items = payload;
        },
        [getCategories.rejected]: (state) => {
            state.isLoading = true
        }
    }
})

export default categoryFeatureSlice.reducer