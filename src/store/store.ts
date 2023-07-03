import {configureStore} from '@reduxjs/toolkit'
import  serviceAPISliceReducer from '../features/serviceAPI/serviceAPISlice'
import  getServicePropertySlice  from '../features/getServiceProperty/getServiceProperty'
import cartFeatureSlice from '../features/cart/cartFeature'
import activeServiceSlice from '../features/serviceAPI/activeServiceSlice'

export const store = configureStore({
    reducer: {
        serviceAPI: serviceAPISliceReducer,
        getServiceProps: getServicePropertySlice,
        cart: cartFeatureSlice,
        activeProduct: activeServiceSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch