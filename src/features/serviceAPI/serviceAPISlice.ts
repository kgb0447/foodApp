import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serviceAPITypes } from "../../dto/serviceAPI";

const initialState :serviceAPITypes = {
    data: [],
    isLoading: false,
    error: null,
    categories: [],
    activeCategory: []

}

export const getData = createAsyncThunk(
    'getData',
    async () => {
            const res = await fetch('http://localhost:448/products');
            const data = await res.json();
            return data
    }
)
export const serviceAPISlice = createSlice({
    name: "serviceAPI",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getData.fulfilled, (state,action)=> {
            state.isLoading = false
            state.data = action.payload;

            const categories = state.data.map((item:any) => item.categories);
            state.categories = Array.from(new Set(categories.flat()));
        })
        builder.addCase(getData.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default serviceAPISlice.reducer