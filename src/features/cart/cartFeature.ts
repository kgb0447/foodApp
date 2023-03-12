import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { cartFeatureTypes } from "../../dto/serviceAPI";

const initialState : cartFeatureTypes= {
    cartItems: [],
    isLoading: false,
    error: null,
    method: {}
}

export const setCartItem = createAsyncThunk(
    'type/setCartData',
    async(method: any) => {
        try{
            const res = await fetch('http://localhost:0449/cart',method)
            const data = res.json();
            return data
        } catch (err) {
            console.error(err)
        }
       
    }
)

export const cartFeatureSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem : (state:any,action:any):any => {
            return {
                ...state,
                method : action.payload
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(setCartItem.pending,(state) => {
            state.isLoading = true
        })
        builder.addCase(setCartItem.fulfilled, (state,action: any) => {
            state.isLoading = false;
            state.cartItems = action.payload
        })
        builder.addCase(setCartItem.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.payload
        })
    },
})

export const {addCartItem} = cartFeatureSlice.actions
export default cartFeatureSlice.reducer