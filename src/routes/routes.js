import { useRoutes } from "react-router-dom";
import CartPage from "../pages/cart/CartPage";
import Favorites from "../pages/favorite/Favorites";
import MainPage from "../pages/main";
import Location from "../pages/geolocation/Location";
import { MinePage } from "../pages/mine/MinePage";
import { Entry } from "../pages/entry";
import SignIn from "../pages/entry/components/sign_in/SignIn";
import SignUp from "../pages/entry/components/sign_up/SignUp";
import EntryFormV2 from "../pages/entry/components/EntryFormV2";

export const Routes = () => {
    const route = useRoutes([
        {
            path: '/',
            element: <Entry/>
        },
        {
            path: '/discover',
            element: <MainPage/>
        },
        {
            path: '/cart',
            element: <CartPage/>
        },
        {
            path: '/favorite',
            element: <Favorites/>
        },
        {
            path: '/mine',
            element: <MinePage/>
        },
        {
            path: '/location',
            element: <Location/>
        },
        
        {
            path: '/signin',
            element: <SignIn/>
        },
        {
            path: '/signup',
            element: <SignUp/>
        },
        // {
        //     path: '*',
        //     element:  <MainPage/>
        // },
        {
            path: '/entry/:id',
            element: <EntryFormV2/>
        }
    ])

    return route;
}