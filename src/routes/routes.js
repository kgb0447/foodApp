import { useRoutes } from "react-router-dom";
import CartPage from "../pages/cart/CartPage";
import Favorites from "../pages/favorite/Favorites";
import MainPage from "../pages/main";
import Location from "../pages/geolocation/Location";
import { MinePage } from "../pages/mine/MinePage";

export const Routes = () => {
    const route = useRoutes([
        {
            path: '/',
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
            path: '*',
            element:  <MainPage/>
        }
    ])

    return route;
}