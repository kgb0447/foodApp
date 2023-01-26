import { useRoutes } from "react-router-dom";
import MainPage from "../pages/main";

export const Routes = () => {
    const route = useRoutes([
        {
            path: '/',
            element: <MainPage/>
        }
    ])

    return route;
}