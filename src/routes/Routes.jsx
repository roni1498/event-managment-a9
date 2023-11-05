
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../layout/Root";
import ServiceDetails from "../Components/ServiceDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AboutUs from "../Components/AboutUs";
import PrivateRoutes from "./PrivateRoutes";
import Gallery from "../Components/gallery";
import PageNotFound from "../Components/PageNotFound";
import Entertainments from "../Components/Entertainments";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/gallery",
                element: <PrivateRoutes><Gallery></Gallery></PrivateRoutes>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/service/:id",
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: () => fetch('../service.json')
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/entertainment",
                element: <PrivateRoutes><Entertainments></Entertainments></PrivateRoutes>
            }
        ]
    }
])
export default router;