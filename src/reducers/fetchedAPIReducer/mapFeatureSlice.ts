import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { RootState } from "../../store/store";
import { useAppSelector } from "../../utils/hooks/redux/hooks";


interface initialStateTypes{
    category: string[],
    menuList: unknown[]
}
const initialState:initialStateTypes = {
    category: [],
    menuList: [],
}

const mapFeatureSlice = createSlice({
    name: "mapper",
    initialState,
    reducers :{
        getCategory : (state, action:PayloadAction<any>) => {
            state.category = action.payload.map((item:any) => item?.category)
        },
        getMenuList : (state,action:PayloadAction<unknown[]>) => {
            state.menuList = action.payload.map((item:any) => item?.menuList)
        }
    }   
})

export const {getCategory,getMenuList} = mapFeatureSlice.actions;
export default mapFeatureSlice.reducer;
