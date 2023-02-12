import { useRoutes } from "react-router-dom";
import CartPage from "../pages/cart/CartPage";
import Favorites from "../pages/favorite/Favorites";
import MainPage from "../pages/main";
import Location from "../pages/geolocation/Location";
import { MinePage } from "../pages/mine/MinePage";
import { Entry } from "../pages/entry";
import Login from "../pages/entry/components/sign_in/Login";
import Register from "../pages/entry/components/sign_up/Register";

export const Routes = () => {
    const route = useRoutes([
        {
            path: '/',
            element: <Entry/>
        },
        {
            path: '/home',
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
            element: <Login/>
        },
        {
            path: '/signup',
            element: <Register/>
        },
        {
            path: '*',
            element:  <MainPage/>
        },
    ])

    return route;
}