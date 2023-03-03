import {configureStore} from '@reduxjs/toolkit'
import mapFeatureSliceReducer from '../reducers/fetchedAPIReducer/mapFeatureSlice'
import categoryFeatureSliceReducer from '../reducers/categories/categoryFeatureSlice'
import  serviceAPISliceReducer from '../features/serviceAPI/serviceAPISlice'

export const store = configureStore({
    reducer: {
        mapperReducer : mapFeatureSliceReducer,
        categoryReducer: categoryFeatureSliceReducer,
        serviceAPI: serviceAPISliceReducer,
        
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch