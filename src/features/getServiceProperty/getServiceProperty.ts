import { createSlice } from "@reduxjs/toolkit";
import { productTypes } from "../../dto/products";

const initialState : {activeCategory: productTypes[],restaurants:string[]} = {
    activeCategory: [],
    restaurants: []
}

export const getServicePropertySlice = createSlice({
    name: 'getServiceProps',
    initialState,
    reducers :{
        getActiveCategory : (state,action) => {
            state.activeCategory = action.payload.data.filter((object:any) => object.categories.some((value:string) => value === action.payload.value))
        }
    }
})

export const {getActiveCategory} = getServicePropertySlice.actions
export default getServicePropertySlice.reducer