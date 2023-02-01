import {configureStore} from '@reduxjs/toolkit'
import mapFeatureSliceReducer from '../reducers/fetchedAPIReducer/mapFeatureSlice'

export const store = configureStore({
    reducer: {
        mapperReducer : mapFeatureSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch