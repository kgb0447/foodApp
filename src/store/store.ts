import {configureStore} from '@reduxjs/toolkit'
import  serviceAPISliceReducer from '../features/serviceAPI/serviceAPISlice'
import  getServicePropertySlice  from '../features/getServiceProperty/getServiceProperty'
import cartFeatureSlice from '../features/cart/cartFeature'

export const store = configureStore({
    reducer: {
        serviceAPI: serviceAPISliceReducer,
        getServiceProps: getServicePropertySlice,
        cart: cartFeatureSlice
        
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch