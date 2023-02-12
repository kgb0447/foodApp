import {configureStore} from '@reduxjs/toolkit'
import mapFeatureSliceReducer from '../reducers/fetchedAPIReducer/mapFeatureSlice'
import categoryFeatureSliceReducer from '../reducers/categories/categoryFeatureSlice'

export const store = configureStore({
    reducer: {
        mapperReducer : mapFeatureSliceReducer,
        categoryReducer: categoryFeatureSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch